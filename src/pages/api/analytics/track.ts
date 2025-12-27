// src/pages/api/analytics/introducir-datos.ts

import { supabase } from '@utils/supabase';

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
  const body = await request.json();
  const { device_id, url, title, search, secret_key } = body;
  console.log('Body recibido:', body);
  
  if (!device_id || !url || !title || !secret_key) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Validar proyecto con URL activa y secret_key
  const { data: proyectos } = await supabase
    .from('proyectos')
    .select('id, urls, secret_key')
    .contains('urls', [{ url, activa: true }])
    .eq('secret_key', secret_key)
    .limit(1);

  if (!proyectos || proyectos.length === 0) {
    return new Response(JSON.stringify({ error: 'Project not found or invalid secret' }), { status: 400 });
  }

  const proyecto = proyectos[0];
  const today = new Date().toISOString().slice(0, 10);

  // Comprobar fila existente
  const { data: existingRows } = await supabase
    .from('analytics_daily_devices')
    .select('*')
    .eq('proyecto_id', proyecto.id)
    .eq('device_id', device_id)
    .eq('date', today);

  const newPage = { url, title, search: search || '', timestamp: new Date().toISOString() };

  if (existingRows && existingRows.length > 0) {
    const row = existingRows[0];
    const updatedPages = [...row.pages, newPage];
    await supabase
      .from('analytics_daily_devices')
      .update({
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
        first_seen_at: new Date().toISOString(),
        last_seen_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
        pageviews_count: 1,
        pages: [newPage]
      }]);
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}