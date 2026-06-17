import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';
import Magnet from '../components/react-bits/Magnet';

// Importar imágenes locales
import trabajo1 from '../assets/trabajos_Recina (1).jpg';
import trabajo2 from '../assets/trabajos_Recina (2).jpg';
import trabajo3 from '../assets/trabajos_Recina (3).jpg';

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
                    {/* Cuadrícula de Imágenes Bento Grid Premium */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-6 h-[550px]">
                            {/* Imagen Principal (Ocupa el lado izquierdo) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="row-span-2 rounded-[2.5rem] overflow-hidden border border-white/20 relative group bg-gray-900"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <img
                                    src={trabajo2}
                                    alt="Arte en Resina Profundo"
                                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                            </motion.div>

                            {/* Imagen Superior Derecha */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[2.5rem] overflow-hidden border border-white/20 relative group bg-gray-900 h-full"
                            >
                                <img
                                    src={trabajo3}
                                    alt="Joyería de Lujo"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                                />
                            </motion.div>

                            {/* Imagen Inferior Derecha */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="rounded-[2.5rem] overflow-hidden border border-white/20 relative group bg-gray-900 h-full"
                            >
                                <img
                                    src={trabajo1}
                                    alt="Mesa de Resina Arte"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                                />
                            </motion.div>
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
                                        <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-500/10" strokeWidth={2.5} />
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
