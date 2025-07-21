import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // 👈 this is the magic line
    port: 5173,          // (optional) set fixed port
    strictPort: true     // (optional) prevent Vite from switching port if 5173 is busy
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000
  },
})
