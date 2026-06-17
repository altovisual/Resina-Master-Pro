import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Star, Zap } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';

const Pricing = () => {
    return (
        <section className="py-24 bg-black px-4 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,187,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Tarjeta de Oferta Única (Izquierda) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group">
                            {/* Brillo exterior decorativo */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-primary rounded-[2.5rem] p-8 md:p-12 text-slate-950 shadow-2xl overflow-hidden">
                                {/* Patrón de fondo sutil */}
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Zap size={120} className="text-black rotate-12" />
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex items-center gap-2">
                                        <div className="bg-slate-950/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-950/20 text-xs font-black tracking-[0.2em] uppercase">
                                            ¡OFERTA EXCLUSIVA!
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                                        OBTÉN ACCESO A NUESTRO CURSO <br />
                                        <span className="text-slate-950/60 uppercase">PARA TODA LA VIDA</span>
                                    </h3>

                                    <div className="mb-2">
                                        <span className="text-slate-950/40 line-through text-lg md:text-xl font-medium decoration-slate-950/30 decoration-2">
                                            Antes $672 USD
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-center mb-6">
                                        <span className="text-2xl md:text-3xl font-bold mt-2">$</span>
                                        <span className="text-7xl md:text-8xl font-black tracking-tighter leading-none">119</span>
                                        <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none self-start mt-2">.99</span>
                                        <span className="text-xl md:text-2xl font-bold self-end mb-2 ml-2">USD</span>
                                    </div>

                                    <p className="text-slate-950/70 font-bold mb-10 italic">
                                        Oferta válida por pocos días
                                    </p>

                                    <motion.a
                                        href="https://pay.hotmart.com/J104562709T"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-6 rounded-2xl font-black text-lg md:text-xl mb-4 shadow-xl hover:shadow-yellow-500/40 transition-all uppercase tracking-tight flex flex-col items-center justify-center leading-none"
                                    >
                                        ¡QUIERO ENTRAR AHORA MISMO!
                                        <span className="text-[10px] mt-2 font-black tracking-widest text-black/60 underline">CLIC AQUÍ</span>
                                    </motion.a>

                                    {/* Logos de Pago */}
                                    <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-90 scale-90">
                                        <img src="/Bank Transfers & Card Networks.svg" className="h-8 w-auto" alt="Visa" />
                                        <img src="/Bank Transfers & Card Networks-1.svg" className="h-8 w-auto" alt="Mastercard" />
                                        <img src="/Global Payment Gateways.svg" className="h-8 w-auto" alt="PayPal" />
                                        <img src="/Digital Wallets.svg" className="h-8 w-auto" alt="Apple Pay" />
                                        <img src="/Crypto & Web3 Payments.svg" className="h-8 w-auto" alt="Binance" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sección de Garantía (Derecha) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                                    <ShieldCheck size={80} className="text-primary relative z-10" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                                        ))}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl md:text-9xl font-black text-primary leading-none">7</span>
                                        <div className="flex flex-col">
                                            <span className="text-2xl md:text-3xl font-black text-white leading-none">DÍAS DE</span>
                                            <span className="text-2xl md:text-3xl font-black text-white leading-none">GARANTÍA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 max-w-lg">
                                <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed">
                                    Tienes <span className="text-white font-black underline decoration-primary underline-offset-4">7 días</span> a partir de la compra para probar nuestro programa.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Si dentro de ese período no cumple y/o supere sus expectativas, vamos a devolverte tu dinero <span className="text-white font-bold">SIN hacer preguntas</span>.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed pt-4 border-t border-white/10 italic">
                                    Te lo garantiza <span className="text-white font-black">Hotmart</span>, la plataforma donde vas a realizar el pago con total seguridad y encriptación de datos.
                                </p>
                            </div>

                            {/* Insignia de Seguridad */}
                            <div className="mt-12 flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm uppercase tracking-wider">Pago 100% Seguro</p>
                                    <p className="text-gray-500 text-xs">Protección SSL de Grado Bancario</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
