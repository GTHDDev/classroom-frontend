import { sentryVitePlugin } from '@sentry/vite-plugin'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		visualizer({
			open: true,
			filename: 'dist/stats.html'
		}),
		sentryVitePlugin({
			org: 'ghosthard1117',
			project: 'classroom-frontend',
			authToken: process.env.SENTRY_AUTH_TOKEN,
			sourcemaps: {
				filesToDeleteAfterUpload: [
					'./**/*.map',
					'.*/**/public/**/*.map',
					'./dist/**/client/**/*.map'
				]
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					if (id.includes('node_modules')) {
						return 'vendor'
					}
				}
			}
		}
	}
})
