import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Framer Motion en su propio chunk — solo se carga cuando se necesita
          'framer-motion': ['framer-motion'],
          // GSAP en su propio chunk
          'gsap': ['gsap'],
          // Locomotive Scroll — desktop only, propio chunk
          'locomotive': ['locomotive-scroll'],
          // React + ReactDOM juntos como vendor base
          'vendor': ['react', 'react-dom'],
        }
      }
    },
    // Aumentar el límite de warning de chunk (por defecto 500kb)
    chunkSizeWarningLimit: 800,
  }
})
