// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore

// import tailwindcss from "@tailwindcss/vite";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
 enabled: false
},
 adapter: vercel(),
integrations: [tailwind(), react()],
  // vite: {
  //   plugins: [tailwindcss()],
  // },
});