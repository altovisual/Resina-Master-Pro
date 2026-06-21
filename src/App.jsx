import React, { useEffect, lazy, Suspense } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

// Secciones críticas — siempre carga inmediata (above the fold)
import Hero from './sections/Hero'

// Secciones below-the-fold — definidas como lazy para code splitting
const Problem     = lazy(() => import('./sections/Problem'))
const Methodology = lazy(() => import('./sections/Methodology'))
const Curriculum  = lazy(() => import('./sections/Curriculum'))
const Instructor  = lazy(() => import('./sections/Instructor'))
const Portfolio   = lazy(() => import('./sections/Portfolio'))
const Pricing     = lazy(() => import('./sections/Pricing'))
const Bonuses     = lazy(() => import('./sections/Bonuses'))
const Recap       = lazy(() => import('./sections/Recap'))
const Countdown   = lazy(() => import('./sections/Countdown'))
const FAQ         = lazy(() => import('./sections/FAQ'))
const Footer      = lazy(() => import('./sections/Footer'))
const GradualBlur = lazy(() => import('./components/react-bits/GradualBlur'))

// Detectar mobile una sola vez (no cambia durante la sesión)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

// =============================================================
// ESTRATEGIA MOBILE: precargar TODOS los chunks inmediatamente
// En desktop: lazy = se cargan cuando el Suspense los necesita
// En mobile:  lazy = se descargan en background desde el inicio
//             → cuando el usuario hace scroll ya están listos
// =============================================================
if (isMobile) {
  import('./sections/Problem')
  import('./sections/Methodology')
  import('./sections/Curriculum')
  import('./sections/Instructor')
  import('./sections/Portfolio')
  import('./sections/Pricing')
  import('./sections/Bonuses')
  import('./sections/Recap')
  import('./sections/Countdown')
  import('./sections/FAQ')
  import('./sections/Footer')
}

// Video de fondo: solo en desktop
const videoHeroImport = !isMobile
  ? import('./assets/video_hero.mp4').then(m => m.default)
  : Promise.resolve(null)

function BackgroundVideo() {
  const [src, setSrc] = React.useState(null)
  useEffect(() => { videoHeroImport.then(s => setSrc(s)) }, [])
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

// En mobile: fallback invisible (height 0) — sin skeleton ni placeholder
// porque los chunks ya están pre-descargando desde el inicio
const SectionFallback = () => isMobile
  ? null
  : <div className="min-h-[200px]" />

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
      {/* GradualBlur: solo en desktop */}
      {!isMobile && (
        <Suspense fallback={null}>
          <GradualBlur preset="page-footer" strength={8} height="15vh" />
        </Suspense>
      )}

      {/* Video: solo en desktop */}
      {!isMobile && <BackgroundVideo />}

      <div className="relative z-10">
        {/* Hero: siempre carga inmediata */}
        <Hero />

        {/* Todas las secciones en un SOLO Suspense:
            - En mobile: los chunks ya están pre-descargando → aparecen sin delay
            - En desktop: se cargan a medida que Suspense los necesita
            
            MotionConfig(reducedMotion="always") en main.jsx se encarga de
            deshabilitar TODAS las animaciones en mobile automáticamente */}
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </div>
    </div>
  )
}

export default App
