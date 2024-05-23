import { defineConfig } from 'astro/config';
import astroWcc from '@projectevergreen/astro-wcc';

// https://astro.build/config
export default defineConfig({
  integrations: [ astroWcc() ]
});
