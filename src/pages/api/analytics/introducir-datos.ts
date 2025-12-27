// src/pages/api/analytics/introducir-datos.ts
import type { Request, Response } from 'express';
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { supabase } from '@utils/supabase';

const app = express();
app.use(express.json());


app.post('/api/track', async (req: Request, res: Response) => {
  const { device_id, url, title, search, secret_key } = req.body;

  if (!device_id || !url || !title || !secret_key) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Buscar proyecto que contenga la URL activa y coincida el secret_key
  const { data: proyectos, error } = await supabase
    .from('proyectos')
    .select('id, urls, secret_key')
    .contains('urls', [{ url, activa: true }])
    .eq('secret_key', secret_key)
    .eq('analytics', true)
    .limit(1);

  if (error || !proyectos || proyectos.length === 0) {
    return res.status(400).json({ error: 'Project not found, URL inactive, or invalid secret' });
  }

  const proyecto = proyectos[0];
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  // Preparar nueva página a añadir
  const newPage = {
    url,
    title,
    search: search || '',
    timestamp: new Date().toISOString()
  };

  // Intentar actualizar fila existente
  const { data: existingRows, error: updateError } = await supabase
    .from('analytics_daily_devices')
    .select('*')
    .eq('proyecto_id', proyecto.id)
    .eq('device_id', device_id)
    .eq('date', today);

  if (updateError) return res.status(500).json({ error: updateError.message });

  if (existingRows && existingRows.length > 0) {
    // Actualizar fila existente
    const row = existingRows[0];
    const updatedPages = [...row.pages, newPage];

    const { error: errorUpdate } = await supabase
      .from('analytics_daily_devices')
      .update({
        last_seen_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
        pageviews_count: row.pageviews_count + 1,
        pages: updatedPages
      })
      .eq('id', row.id);

    if (errorUpdate) return res.status(500).json({ error: errorUpdate.message });
  } else {
    // Insertar nueva fila
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

    if (insertError) return res.status(500).json({ error: insertError.message });
  }

  res.json({ success: true });
});

export default app;
