import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, ArrowRight } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';

const Problem = () => {
    return (
        <section className="py-24 bg-black px-4 relative overflow-hidden border-t border-white/5">
            {/* Elemento de fondo difuminado */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black tracking-widest uppercase mb-6"
                    >
                        <AlertCircle size={14} />
                        El gran obstáculo al iniciar
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-white leading-tight uppercase"
                    >
                        ¿Te sientes estancada <br />
                        <span className="text-red-500 italic">sin saber por dónde empezar?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Tarjeta del Problema (Dolor) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/40 border border-red-500/10 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-red-500">
                            <XCircle size={120} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-tight flex items-center gap-2">
                                La Realidad Común
                            </h3>
                            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    ¿Llevas meses viendo cómo otras venden resina mientras tú sigues mirando tutoriales sin atreverte a empezar?
                                </p>
                                <p>
                                    Compras materiales que terminan guardados. Intentas hacer tus piezas y te salen burbujas, quedan opacas o los moldes terminan mal desmoldados. Y al final crees que <span className="text-white font-bold">"esto no es para ti"</span>.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-red-400/80 text-sm font-bold italic">
                                El problema no es tu talento. Es que estás aprendiendo a pedazos, sin un sistema claro.
                                </p>
                        </div>
                    </motion.div>

                    {/* Tarjeta de la Solución (Presentando el curso) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/60 border border-primary/20 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden shadow-[0_0_30px_rgba(0,255,187,0.05)]"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight">
                                La Solución Definitiva
                            </h3>
                            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    <span className="text-white font-black">Resina Master Pro</span> es el método completo —23 módulos paso a paso— para que domines la técnica, crees productos rentables y generes tus primeras ganancias en menos de 15 días.
                                </p>
                                <p>
                                    Desde lo básico (qué resina usar, mezclas exactas, seguridad) hasta lo que de verdad vende: llaveros, joyería, vasos y termos personalizados, relojes, lámparas, agendas y más. Incluso aprendes a crear tu marca, empaque y a vender.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-primary font-black text-sm uppercase tracking-wider flex items-center gap-2">
                                Deja de improvisar <ArrowRight size={16} className="animate-pulse" />
                            </span>
                            <span className="text-white/60 text-xs italic">
                                Empieza hoy con la ruta correcta
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
