import { defineConfig } from 'astro/config';

// Adaptix Founder OS docs site.
// Cinematic mission-control theme; matches adaptixcore.com visual identity.
export default defineConfig({
  site: 'https://docs.adaptixcore.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  server: {
    port: 4321,
    host: true,
  },
});
