// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const dev = process.env.NODE_ENV === 'development';

export default {
	extensions: ['.svelte','.md', '.svx'],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			paths: {
				assets: dev ? '' : '/dust-world.github.io',
				base: dev ? '' : '/dust-world.github.io'
			},
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	},
	plugins: [
		svelte({
			experimental: {
				useVitePreprocess: true
			}
		})
	],
	preprocess: [
		preprocess({}),
		mdsvex({
			extensions: ['.md', '.svx', '.ts'],
			layout: {
				soloPage: "./src/_layouts/soloPageLayout.svelte",
				_: "./src/_layouts/baseLayout.svelte"
			}
		})
	]
};