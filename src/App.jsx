import React from 'react'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Features from './sections/Features'
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
import Noise from './components/react-bits/Noise'
import TargetCursor from './components/react-bits/TargetCursor'
import videoHero from './assets/video_hero.mp4'

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-sans relative">
      <TargetCursor targetSelector=".cursor-target" />
      <Noise
        patternSize={140}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
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
        <Features />
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
