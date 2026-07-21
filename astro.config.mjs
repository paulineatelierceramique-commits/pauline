// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paulineatelierceramique-commits.github.io',
  base: '/pauline',
 
  integrations: [sitemap()],
});







// à enlever quand le site sera en ligne sur le domaine définitif
// @ts-check
//import { defineConfig } from 'astro/config';

// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//export default defineConfig({
 // site: 'https://paulinerebufat.fr',
  // base: '/pauline',
 // integrations: [sitemap()],
// });
