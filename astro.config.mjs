// @ts-check
import { defineConfig } from 'astro/config';
import speedInsights from '@vercel/speed-insights/astro';

export default defineConfig({
  integrations: [speedInsights({})],
  devToolbar: {
    enabled: true
  },
  server: {
    port: 3000
  }
});
