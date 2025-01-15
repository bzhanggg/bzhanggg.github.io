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
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			handleHttpError: ({ path, referrer, message }) => {
				if (path === '/favicon.ico') {
					return;
				}
				// otherwise fail the build
				throw new Error(message);
			},
			entries: ['*']
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/bzhanggg.github.io' : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
