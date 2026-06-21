import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';
import Magnet from '../components/react-bits/Magnet';

// Importación LAZY de imágenes — no carga al inicio, solo cuando el componente monta
const imagesGlob = import.meta.glob('../assets/portfolio/*.jpg');

// Helper para cargar una imagen por nombre de archivo
const loadImg = async (filename) => {
    const key = Object.keys(imagesGlob).find(k => k.includes(filename));
    if (!key) return null;
    const mod = await imagesGlob[key]();
    return mod.default;
};
// Cache de imágenes del slideshow
let cachedSlideshow = null;

const Methodology = () => {
    const points = [
        "El curso es online y puedes verlo desde tu celular, tablet o computadora las veces que necesites 24/7. Incluso sin internet.",
        "Certificado personalizado descargable avalado por Andrea Bolívar - Artista y Fundadora del programa.",
        "Es una inversión única y tienes acceso ilimitado PARA TODA LA VIDA. Programa con 23 módulos paso a paso y con actualizaciones futuras en video de alta definición (HD).",
        "Créeme que tu vida cambiará al aplicar esta capacitación y tus resultados crecerán, ya es tiempo de que sientas TOTAL FELICIDAD Y ORGULLO POR TI.",
        "Aprenderás a realizar las técnicas correctas del mundo de la resina epóxica desde la comodidad de tu casa.",
        "Además de ahorrar podrás generar ingresos extras creando piezas de arte únicas y profesionales.",
        "Aprenderás a tu propio ritmo, sin presiones y de una forma fácil y rápida."
    ];

    const [currentImg, setCurrentImg] = useState(0);
    const [slideshowImages, setSlideshowImages] = useState([]);

    // Cargar imágenes del slideshow de forma lazy al montar
    useEffect(() => {
        const load = async () => {
            if (cachedSlideshow) { setSlideshowImages(cachedSlideshow); return; }
            const [p23, p1, p3, p4, p5, p30] = await Promise.all([
                loadImg('photo_23_2026-06-11_10-11-38'),
                loadImg('photo_1_2026-06-11_10-08-09'),
                loadImg('photo_3_'),
                loadImg('photo_4_'),
                loadImg('photo_5_'),
                loadImg('photo_30_2026-06-11_10-11-38'),
            ]);
            const imgs = [p23, p1, p3, p4, p5, p30].filter(Boolean);
            cachedSlideshow = imgs;
            setSlideshowImages(imgs);
        };
        load();
    }, []);

    useEffect(() => {
        if (slideshowImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % slideshowImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slideshowImages.length]);

    return (
        <section className="py-24 bg-black px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter"
                    >
                        ¿Cómo lo vas a <br />
                        <GradientText>lograr?</GradientText>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Hemos desarrollado una <span className="text-white font-bold">Variedad de Técnicas</span> y creamos una capacitación catalogada como una de las más <span className="text-white font-bold">completas del mercado</span>, con 23 módulos detallados paso a paso.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Slideshow de Imagen Única (Framer Motion Cross-fade) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,245,212,0.15)] bg-gray-900 group">
                            {/* Imagen sin animación — cambia instantáneamente */}
                                <img
                                    key={currentImg}
                                    src={slideshowImages[currentImg]}
                                    alt="Mejores trabajos del portafolio"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            {/* Overlay degradado sutil en la parte inferior */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                            
                            {/* Indicadores de diapositiva (Puntitos) */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                                {slideshowImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImg(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                            idx === currentImg 
                                                ? 'bg-primary scale-125 shadow-[0_0_8px_rgba(0,245,212,0.8)]' 
                                                : 'bg-white/30 hover:bg-white/60'
                                        }`}
                                        aria-label={`Ir a imagen ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lista de Beneficios con Checkmarks */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-5">
                            {points.map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-primary fill-primary/10" strokeWidth={2.5} />
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Botón CTA (Basado en el estilo de Hero.jsx) */}
                        <div className="mt-12 flex justify-center lg:justify-start">
                            <Magnet padding={50} strength={3}>
                                <motion.a
                                    href="https://pay.hotmart.com/J104562709T"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group px-10 py-5 bg-white text-black font-bold text-xl rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden transition-all cursor-target flex items-center justify-center"
                                >
                                    <span className="relative z-10 uppercase">¡Quiero entrar ahora mismo!</span>
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            </Magnet>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[150px] -z-10 rounded-full" />
        </section>
    );
};

export default Methodology;
