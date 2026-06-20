import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Curriculum from './sections/Curriculum'
import Pricing from './sections/Pricing'
import Instructor from './sections/Instructor'
import Methodology from './sections/Methodology'
import Bonuses from './sections/Bonuses'
import Recap from './sections/Recap'
import Countdown from './sections/Countdown'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'
import Portfolio from './sections/Portfolio'
import GradualBlur from './components/react-bits/GradualBlur'
import videoHero from './assets/video_hero.mp4'

function App() {
  useEffect(() => {
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
      {/* Desenfoque gradual fijo en el borde inferior */}
      <GradualBlur preset="page-footer" strength={8} height="15vh" />

      {/* Video de fondo inmersivo para toda la página */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-[0.12] grayscale pointer-events-none"
      >
        <source src={videoHero} type="video/mp4" />
      </video>

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
