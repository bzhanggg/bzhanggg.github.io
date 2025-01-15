import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				grotesk: ['"Host Grotesk"', 'sans-serif']
			},
			fontWeight: {
				'extra-bold': '800',
				normal: '400'
			},
			fontSize: {
				base: ['1.125rem', '1.75rem']
			}
		}
	},

	plugins: [typography, aspectRatio]
} satisfies Config;
