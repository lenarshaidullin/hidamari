// @ts-check
import { defineConfig } from 'astro/config';
import CustomLogger from './src/integrations/custom-logger';

export default defineConfig({
  site: 'https://hidamari.ru',
  integrations: [CustomLogger()],
});