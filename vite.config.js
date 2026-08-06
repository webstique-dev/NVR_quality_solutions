import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: true,
    // Split vendor libraries into stable, cache-friendly chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
})
