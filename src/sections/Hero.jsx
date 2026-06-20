import React from 'react';
import SplitText from '../components/react-bits/SplitText';
import Magnet from '../components/react-bits/Magnet';
import GradientText from '../components/react-bits/GradientText';
import { motion } from 'framer-motion';
import bgHero from '../assets/4.png';
import bgMobile from '../assets/6.png';
import solapeImg from '../assets/solape.png';
import celImg from '../assets/cel.png';
import { Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center md:items-end justify-center px-4 md:px-20 pt-20 pb-24 md:pb-0 bg-black">
            {/* Imagen de fondo con overlay - con overflow-hidden para contener el background */}
            <div className="absolute inset-0 z-0 select-none overflow-hidden">
                {/* Capas de fondo base */}
                <img
                    src={bgHero}
                    alt="Background Desktop"
                    className="hidden md:block w-full h-full object-cover opacity-100 scale-105"
                />
                <img
                    src={bgMobile}
                    alt="Background Mobile"
                    className="block md:hidden w-full h-[65vh] object-cover opacity-100 object-[center_top]"
                />

                {/* Degradados de oscurecimiento */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent hidden md:block" />
                <div className="absolute top-0 w-full h-[65vh] bg-gradient-to-t from-black via-transparent to-black/30 md:hidden z-10" />

                {/* Capa de Solape (Sujeto con iluminación original) - Desktop */}
                <img
                    src={solapeImg}
                    alt="Sujeto Solape Desktop"
                    className="absolute inset-0 w-full h-full object-cover z-10 scale-105 pointer-events-none hidden md:block"
                />
                {/* Capa de Solape (Sujeto con iluminación original) - Mobile */}
                <img
                    src={celImg}
                    alt="Sujeto Solape Mobile"
                    className="absolute top-0 w-full h-[65vh] object-cover z-10 pointer-events-none block md:hidden object-[center_top]"
                />
            </div>

            <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-12 h-full">

                {/* Bloque Izquierdo: Información */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl md:mb-48 w-full mt-[50vh] sm:mt-40 md:mt-0 relative z-20 px-2">

                    <GradientText
                        as="h1"
                        colors={["#ffffff", "#00F5D4", "#00D2C4", "#00F5D4", "#ffffff"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-4xl md:text-6xl lg:text-7xl font-tanker font-black italic uppercase block drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] md:drop-shadow-none"
                    >
                        Resina Master Pro
                    </GradientText>

                    <div className="flex justify-center md:justify-start mt-4">
                        <SplitText
                            text="El método definitivo paso a paso"
                            className="text-base md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug mb-4 drop-shadow-md md:drop-shadow-none"
                        />
                    </div>

                    <div className="h-1 w-32 bg-primary mb-6 shadow-[0_0_15px_rgba(0,255,187,0.5)] mx-auto md:mx-0" />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/90 md:text-gray-200 text-sm md:text-lg lg:text-xl mb-10 leading-relaxed font-medium drop-shadow-md md:drop-shadow-none max-w-lg"
                    >
                        El método completo de 23 módulos paso a paso para que domines la técnica, crees productos altamente rentables y generes tus primeras ganancias en menos de 15 días.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Magnet padding={50} strength={3}>
                            <motion.a
                                href="https://pay.hotmart.com/J104562709T"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 187, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group px-10 py-5 bg-primary text-black font-bold text-lg md:text-xl rounded-xl overflow-hidden transition-all cursor-target flex items-center gap-3"
                            >
                                <span className="relative z-10 uppercase tracking-tight">QUIERO PARTICIPAR</span>
                                <Zap className="w-5 h-5 fill-black" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </motion.a>
                        </Magnet>
                    </div>
                </div>

                {/* Bloque Derecho (Espacio reservado) */}
                <div className="flex-1 hidden md:block" />
            </div>

            {/* Indicador de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block z-20"
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
