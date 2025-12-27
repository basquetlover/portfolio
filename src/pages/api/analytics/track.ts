// src/pages/api/analytics/introducir-datos.ts

import { supabase } from '@utils/supabase';
import UAParserPkg from 'ua-parser-js';
const UAParser = UAParserPkg as any;
// import * as UAParser from 'ua-parser-js';
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
    const { device_id, url, title, search, secret_key, user_agent, language, timezone } = body;

    if (!device_id || !url || !title || !secret_key) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Buscar proyecto con ese secret_key
    const { data: proyectos } = await supabase
      .from('proyectos')
      .select('id, urls, secret_key')
      .eq('secret_key', secret_key)
      .eq('analytics', true);

    if (!proyectos || proyectos.length === 0) {
      return new Response(JSON.stringify({ error: 'Project not found or invalid secret' }), { status: 400 });
    }

    // Filtrar proyecto que tenga la URL activa
    const proyecto = proyectos.find(p =>
      p.urls.some((u: any) => u.url === url && u.activa)
    );

    if (!proyecto) {
      return new Response(JSON.stringify({ error: 'Project not found or inactive URL' }), { status: 400 });
    }

    const today = new Date().toISOString().slice(0, 10);

    
    // Parsear userAgent
    const UAParser = require('ua-parser-js');
    const parser = new UAParser(user_agent);
    const device_type = parser.getDevice().type || 'desktop';
    const browser_name = parser.getBrowser().name || '';
    const browser_version = parser.getBrowser().version || '';
    const os_name = parser.getOS().name || '';
    const os_version = parser.getOS().version || '';

    const newPage = {
      url,
      title,
      search: search || '',
      timestamp: new Date().toISOString(),
      user_agent,
      device_type,
      browser_name,
      browser_version,
      os_name,
      os_version,
      language,
      timezone
    };

    // Comprobar fila existente
    const { data: existingRows } = await supabase
      .from('analytics_daily_devices')
      .select('*')
      .eq('proyecto_id', proyecto.id)
      .eq('device_id', device_id)
      .eq('date', today);

    if (existingRows && existingRows.length > 0) {
      const row = existingRows[0];
      const updatedPages = [...row.pages, newPage];
      const { error: updateError } = await supabase
        .from('analytics_daily_devices')
        .update({
          last_seen_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
          pageviews_count: row.pageviews_count + 1,
          pages: updatedPages
        })
        .eq('id', row.id);

      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase
        .from('analytics_daily_devices')
        .insert([{
          proyecto_id: proyecto.id,
          device_id,
          date: today,
          first_seen_at: new Date().toISOString(),
          last_seen_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
          pageviews_count: 1,
          pages: [newPage]
        }]);

      if (insertError) throw insertError;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error('Analytics API error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal error' }), { status: 500 });
  }
}