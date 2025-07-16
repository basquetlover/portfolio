// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore

import tailwindcss from "@tailwindcss/vite";

import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  devToolbar: {
 enabled: false
},
 adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});