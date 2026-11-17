import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://tkatra.github.io/Al-s-Pizza/ on GitHub Pages
  base: '/Al-s-Pizza/',
  plugins: [react()],
})
