import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

// ─── Imports directos — sin lazy, sin Suspense ───────────────────────────────
// Todas las secciones cargan en el bundle inicial → aparecen instantáneamente
// al hacer scroll, sin esperas ni placeholders
import Hero        from './sections/Hero'
import Problem     from './sections/Problem'
import Methodology from './sections/Methodology'
import Curriculum  from './sections/Curriculum'
import Instructor  from './sections/Instructor'
import Portfolio   from './sections/Portfolio'
import Pricing     from './sections/Pricing'
import Bonuses     from './sections/Bonuses'
import Recap       from './sections/Recap'
import Countdown   from './sections/Countdown'
import FAQ         from './sections/FAQ'
import Footer      from './sections/Footer'

// GradualBlur solo en desktop (costoso en mobile)
import GradualBlur from './components/react-bits/GradualBlur'

// ─── Detectar mobile ─────────────────────────────────────────────────────────
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

// ─── Video de fondo: solo desktop ────────────────────────────────────────────
let videoSrc = null
if (!isMobile) {
  import('./assets/video_hero.mp4').then(m => { videoSrc = m.default })
}

function BackgroundVideo() {
  const [src, setSrc] = React.useState(null)
  useEffect(() => {
    if (!isMobile) {
      import('./assets/video_hero.mp4').then(m => setSrc(m.default))
    }
  }, [])
  if (!src) return null
  return (
    <video
      autoPlay muted loop playsInline
      className="fixed inset-0 w-full h-full object-cover z-0 opacity-[0.12] grayscale pointer-events-none"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function App() {
  useEffect(() => {
    // LocomotiveScroll solo en desktop
    if (isMobile) return
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }
    })
    return () => { locomotiveScroll.destroy() }
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-sans relative">
      {/* GradualBlur y Video: solo desktop */}
      {!isMobile && <GradualBlur preset="page-footer" strength={8} height="15vh" />}
      {!isMobile && <BackgroundVideo />}

      <div className="relative z-10">
        <Hero />
        <Problem />
        <Methodology />
        <Curriculum />
        <Instructor />
        <Portfolio />
        <Pricing />
        <Bonuses />
        <Recap />
        <Countdown />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
