import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Reduce memory usage on constrained systems
    sourcemap: false,
    // Use esbuild for minification (built-in, no extra deps)
    minify: 'esbuild',
    cssCodeSplit: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            return 'vendor'
          }
        }
      }
    }
  }
})
