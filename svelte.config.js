import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: [
        '*',
      ]
    },
    paths: {
      base: process.env.NODE_ENV === "production" ? "/bzhanggg.github.io" : ""
    }
  },
  preprocess: vitePreprocess()
};

export default config;
