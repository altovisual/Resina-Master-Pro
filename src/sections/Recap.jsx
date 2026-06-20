import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';
import bono1 from '../assets/bonos/box (1).webp';
import bono2 from '../assets/bonos/box (2).webp';
import bono3 from '../assets/bonos/box (4).webp';

const Recap = () => {
    // Variables para el efecto de Tilt 3D
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const points = [
        "Aprenderás a tu propio ritmo, sin presiones y en tan solo 15 días obtendrás resultados increíbles.",
        "Nuestro programa cuenta con 23 módulos detallados paso a paso para que logres el objetivo de ser una experta en el mundo de la resina epóxica.",
        "Contamos con una guía con el paso a paso que te ayudará a hacer más fácil tu proceso de aprendizaje.",
        "Garantía de satisfacción de 7 días. Si nuestro programa no cumple tus expectativas, te devolvemos el dinero."
    ];

    return (
        <section className="py-24 bg-black px-4 relative">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Cabecera */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic mb-4 uppercase">¡RECAPITULEMOS!</h2>
                    <p className="text-primary text-xl md:text-2xl font-bold tracking-tight">¡Estás a un paso de una gran oportunidad!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual de Bundle (Representación de cajas) */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        <div className="relative w-full max-w-md perspective-1000 mb-20 md:mb-0">
                            {/* Imagen Principal y Portada (Rotación Interactiva 3D Únicamente) */}
                            <motion.div
                                ref={ref}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                                className="w-full relative cursor-pointer flex justify-end pr-4 mb-12"
                            >
                                {/* Portada del Curso (Fondo / Base para el tamaño) */}
                                <img
                                    src="/PORTADA RESINA MASTER PRO.webp"
                                    alt="Portada del Curso"
                                    className="w-[85%] relative -mt-6 h-auto object-cover rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,255,187,0.2)] z-0 border border-white/10"
                                    style={{ transform: 'translateZ(-10px)' }}
                                    loading="lazy"
                                />

                                {/* Certificado (Frente / Superpuesto) */}
                                <img
                                    src="/Resina Express (1).jpg.webp"
                                    alt="Resina Master Pro Certificado"
                                    className="absolute -bottom-12 -left-4 w-[55%] h-auto object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 border border-white/20"
                                    style={{ 
                                        transform: 'translateZ(40px) rotate(-4deg)'
                                    }}
                                    loading="lazy"
                                />
                            </motion.div>

                            {/* Cajas de Bonos Superpuestas (Organizadas en Fila) */}
                            <div className="absolute -bottom-28 sm:-bottom-32 md:-bottom-24 left-1/2 -translate-x-1/2 w-[120%] flex flex-col items-center z-20">
                                {/* Etiqueta identificativa de Bonos */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="bg-primary text-black px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-primary/50 z-30 relative top-4 md:top-8"
                                >
                                    + 6 Bonos Gratis
                                </motion.div>

                                <div className="flex flex-row justify-center items-end gap-2 sm:gap-4 w-full">
                                    <motion.img
                                        src={bono1}
                                        alt="Bono 1"
                                        initial={{ y: 50, opacity: 0, rotate: -10 }}
                                        whileInView={{ y: 0, opacity: 1, rotate: -5 }}
                                        viewport={{ once: true }}
                                        className="w-[30%] sm:w-32 rounded-xl shadow-2xl border border-white/10"
                                        loading="lazy"
                                    />
                                    <motion.img
                                        src={bono3}
                                        alt="Bono 3"
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, rotate: 2 }}
                                        transition={{ delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="w-[20%] sm:w-24 rounded-lg shadow-xl border border-white/10 relative top-4 z-0"
                                        loading="lazy"
                                    />
                                    <motion.img
                                        src={bono2}
                                        alt="Bono 2"
                                        initial={{ y: 50, opacity: 0, rotate: 10 }}
                                        whileInView={{ y: 0, opacity: 1, rotate: 5 }}
                                        transition={{ delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="w-[30%] sm:w-32 rounded-xl shadow-2xl border border-white/10 z-10"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Texto Informativo */}
                    <div className="order-1 lg:order-2">
                        <div className="mb-10">
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                <span className="text-white font-black">Resina Master Pro</span> es el programa más completo del mercado con el que podrás afianzar tus conocimientos y emprender en el área de la <span className="text-primary italic font-bold">Resina Epóxica</span>.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            {points.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 size={24} className="text-primary shrink-0" />
                                    </div>
                                    <p className="text-gray-300 text-base md:text-lg font-medium leading-tight">
                                        {p}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                            <ShieldCheck size={32} className="text-primary" />
                            <p className="text-xs text-gray-400">
                                <span className="text-white font-bold uppercase">Satisfacción Garantizada.</span><br />
                                Si no es lo que esperabas, tienes 7 días para solicitar tu reembolso.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Recap;
