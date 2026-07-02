// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  prerender: {
    routes: ['/', '/contacto', '/ayuda'],
  }
  // Borramos el bloque "image" para que use Sharp por defecto
});