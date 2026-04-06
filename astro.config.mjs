// @ts-check
import { defineConfig } from 'astro/config';
import CustomLogger from './src/integrations/custom-logger';

// https://astro.build/config
export default defineConfig({
  integrations: [
    CustomLogger(),
  ],
});