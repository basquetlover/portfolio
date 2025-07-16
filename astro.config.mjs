// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore

// import tailwindcss from "@tailwindcss/vite";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  devToolbar: {
 enabled: false
},
 adapter: vercel(),
integrations: [tailwind()],
  // vite: {
  //   plugins: [tailwindcss()],
  // },
});