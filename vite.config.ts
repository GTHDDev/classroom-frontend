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
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					if (id.includes('node_modules')) {
						if (
							id.includes('react-dom') ||
							id.includes('react-router-dom') ||
							id.includes('react')
						) {
							return 'vendor_react'
						}
						if (id.includes('@refinedev')) {
							return 'vendor_refine'
						}
						if (
							id.includes('@radix-ui') ||
							id.includes('lucide-react') ||
							id.includes('recharts')
						) {
							return 'vendor_ui'
						}

						return 'vendor_rest'
					}
				}
			}
		}
	}
})
