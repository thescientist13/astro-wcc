import { defineConfig } from 'astro/config';
import wccSSR from './wcc-ssr.js';

// https://astro.build/config
export default defineConfig({
  integrations: [ wccSSR() ]
});
