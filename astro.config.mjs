// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://me-in-bytes.vercel.app/',
  devToolbar: {
    enabled: true
  },
  server: {
    port: 3000
  }
});
