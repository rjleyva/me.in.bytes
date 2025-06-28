import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://me-in-bytes.vercel.app/',
  devToolbar: {
    enabled: true
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'catppuccin-latte'
    }
  },
  server: {
    port: 3000
  }
});
