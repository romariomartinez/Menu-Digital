import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 importante para Vercel/Netlify
  build: {
    outDir: "dist"
  },
  server: {
    port: 5173
  }
})
