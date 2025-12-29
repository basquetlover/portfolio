// src/pages/api/analytics/introducir-datos.ts

import { supabase } from '@utils/supabase';
// import UAParserPkg from 'ua-parser-js';
// const UAParser = UAParserPkg as any;
import * as UAParser from 'ua-parser-js';
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // o tu dominio específico
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    const { device_id, url, pathname, title, search, secret_key, browser, os, country, region, device_type, language, timezone } = body;

    if (!device_id || !url || !title || !secret_key) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const { data: proyectos } = await supabase
      .from('proyectos')
      .select('id, urls, secret_key')
      .eq('secret_key', secret_key)
      .eq('analytics', true);

    if (!proyectos || proyectos.length === 0) {
      return new Response(JSON.stringify({ error: 'Project not found or invalid secret' }), { status: 400 });
    }

    const proyecto = proyectos.find(p =>
      p.urls.some((u: any) => u.url === url && u.activa)
    );

    if (!proyecto) {
      return new Response(JSON.stringify({ error: 'Project not found or inactive URL' }), { status: 400 });
    }

    const today = new Date().toISOString().slice(0, 10);

    const newPage = {
      url,
      pathname,
      title,
      search: search || '',
      timestamp: new Date().toISOString(),
      browser,
      os,
      country,
      region,
      device_type,
      language,
      timezone
    };

    const { data: existingRows } = await supabase
      .from('analytics_daily_devices')
      .select('*')
      .eq('proyecto_id', proyecto.id)
      .eq('device_id', device_id)
      .eq('date', today);

    if (existingRows && existingRows.length > 0) {
      const row = existingRows[0];
      const updatedPages = [...row.pages, newPage];
      await supabase
        .from('analytics_daily_devices')
        .update({
          language: language || 'Unknown',
          device_type: device_type || 'Unknown',
          country: country || 'Unknown',
          browser_name: browser || 'Unknown',
          os_name: os || 'Unknown',
          last_seen_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
          pageviews_count: row.pageviews_count + 1,
          pages: updatedPages
        })
        .eq('id', row.id);
    } else {
      await supabase
        .from('analytics_daily_devices')
        .insert([{
          proyecto_id: proyecto.id,
          device_id,
          date: today,
          language: language || 'Unknown',
          device_type: device_type || 'Unknown',
          country: country || 'Unknown',
          browser_name: browser || 'Unknown',
          os_name: os || 'Unknown',
          first_seen_at: new Date().toISOString(),
          last_seen_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
          pageviews_count: 1,
          pages: [newPage]
        }]);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    console.error('Analytics API error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal error' }), { status: 500 });
  }
}