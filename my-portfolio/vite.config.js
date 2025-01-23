import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-portfolio/',
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: true,
    fs: {
      strict: false,
      allow: ['..']
    }
  }
})
