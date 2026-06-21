import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MotionConfig } from 'framer-motion'

// Detectar mobile una sola vez al inicio
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

// MotionConfig con reducedMotion="always" en mobile:
// Desactiva TODAS las animaciones de Framer Motion en todos los componentes
// sin tocar ningún archivo individual. Los elementos aparecen instantáneamente
// en su estado final (animate={}) sin transición ni delay.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <App />
    </MotionConfig>
  </React.StrictMode>,
)
