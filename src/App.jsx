import React, { useEffect, lazy, Suspense } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

// Secciones críticas — cargan inmediatamente (above the fold)
import Hero from './sections/Hero'

// Secciones below-the-fold — carga diferida (lazy)
const Problem = lazy(() => import('./sections/Problem'))
const Curriculum = lazy(() => import('./sections/Curriculum'))
const Pricing = lazy(() => import('./sections/Pricing'))
const Instructor = lazy(() => import('./sections/Instructor'))
const Methodology = lazy(() => import('./sections/Methodology'))
const Bonuses = lazy(() => import('./sections/Bonuses'))
const Recap = lazy(() => import('./sections/Recap'))
const Countdown = lazy(() => import('./sections/Countdown'))
const FAQ = lazy(() => import('./sections/FAQ'))
const Footer = lazy(() => import('./sections/Footer'))
const Portfolio = lazy(() => import('./sections/Portfolio'))
const GradualBlur = lazy(() => import('./components/react-bits/GradualBlur'))

// Detectar mobile una sola vez (no cambia durante la sesión)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

// Import lazy del video solo en desktop
const videoHeroImport = !isMobile
  ? import('./assets/video_hero.mp4').then(m => m.default)
  : Promise.resolve(null);

let videoSrc = null;
videoHeroImport.then(src => { videoSrc = src; });

function BackgroundVideo() {
  const [src, setSrc] = React.useState(null);
  useEffect(() => {
    videoHeroImport.then(s => setSrc(s));
  }, []);
  if (!src) return null;
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-0 opacity-[0.12] grayscale pointer-events-none"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

// Fallback minimal mientras carga cada sección
const SectionFallback = () => <div className="min-h-[200px]" />;

function App() {
  useEffect(() => {
    // LocomotiveScroll solo en desktop — en mobile el scroll nativo es más rápido
    if (isMobile) return;

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
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-sans relative">
      {/* Desenfoque gradual fijo — solo en desktop (efecto visual pesado para mobile) */}
      {!isMobile && (
        <Suspense fallback={null}>
          <GradualBlur preset="page-footer" strength={8} height="15vh" />
        </Suspense>
      )}

      {/* Video de fondo — SOLO en desktop (9.5 MB, sin sentido en mobile) */}
      {!isMobile && <BackgroundVideo />}

      <div className="relative z-10">
        {/* Hero: carga inmediata — es lo primero que ve el usuario */}
        <Hero />

        {/* Resto de secciones: carga diferida con Suspense */}
        <Suspense fallback={<SectionFallback />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Methodology />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Curriculum />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Instructor />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Bonuses />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Recap />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Countdown />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
