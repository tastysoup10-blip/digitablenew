import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			strict: false
		}),
		alias: {
			$svgeditor: resolve(rootDir, '../svgeditor/src/lib')
		},
		experimental: {
			instrumentation: { server: true },
			tracing: { server: true }
		},
		paths: {
			base: process.env.BASE_PATH ?? '/digitablenew/app'
		}
	}
};

export default config;
