// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 esto asegura que todas las rutas funcionen en producción
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
})
