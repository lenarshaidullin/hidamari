// @ts-check
import { defineConfig } from 'astro/config';
import CustomLogger from './src/integrations/custom-logger';

export default defineConfig({
  site: 'https://yourdomain.com', // prod domain
  integrations: [CustomLogger()],
});