import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        dias: 0,
        horas: 11,
        minutos: 59,
        segundos: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.segundos > 0) return { ...prev, segundos: prev.segundos - 1 };
                if (prev.minutos > 0) return { ...prev, minutos: prev.minutos - 1, segundos: 59 };
                if (prev.horas > 0) return { ...prev, horas: prev.horas - 1, minutos: 59, segundos: 59 };
                if (prev.dias > 0) return { ...prev, dias: prev.dias - 1, horas: 23, minutos: 59, segundos: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-primary text-black w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-black mb-2 shadow-[0_0_20px_rgba(0,255,187,0.3)]">
                {value}
            </div>
            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">{label}</span>
        </div>
    );

    return (
        <section className="py-20 bg-black px-4 relative overflow-hidden">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">OBTÉN ACCESO A NUESTRO CURSO PARA</h3>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase italic">TODA LA VIDA</h2>

                {/* Marquee Superior (UX Mejorado - Outline) */}
                <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.07] pointer-events-none select-none z-0">
                    <motion.div
                        animate={{ x: [0, -1500] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-12 text-[10rem] md:text-[15rem] font-black italic"
                        style={{ WebkitTextStroke: '2px #00FFBB', color: 'transparent' }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <span key={i}>OFERTA LIMITADA —</span>
                        ))}
                    </motion.div>
                </div>

                <div className="mb-4 relative z-10">
                    <span className="text-primary text-lg md:text-xl font-bold line-through opacity-50 decoration-2 italic">Antes $672 USD, ahora</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-8 relative z-10">
                    <span className="text-6xl md:text-8xl font-black text-primary italic tracking-tighter">$119.99</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary mt-6 tracking-tight">USD</span>
                </div>

                <p className="text-white text-lg md:text-xl font-bold italic mb-10 opacity-90 relative z-10">
                    Oferta válida por 12 horas
                </p>

                <motion.a
                    href="https://pay.hotmart.com/J104562709T"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-md mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-5 rounded-2xl font-black text-lg md:text-xl mb-6 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all uppercase tracking-tight relative z-10"
                >
                    ¡QUIERO ENTRAR AHORA MISMO!
                    <span className="block text-[10px] opacity-70 font-normal tracking-widest mt-1">CLIC AQUÍ</span>
                </motion.a>

                {/* Logos de Pago */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-16 opacity-90 backdrop-blur-sm bg-white/5 p-5 rounded-2xl border border-white/10 relative z-10">
                    <img src="/Bank Transfers & Card Networks.svg" className="h-6 md:h-8" alt="Visa" />
                    <img src="/Bank Transfers & Card Networks-1.svg" className="h-6 md:h-8" alt="Mastercard" />
                    <img src="/Global Payment Gateways.svg" className="h-6 md:h-8" alt="PayPal" />
                    <img src="/Digital Wallets.svg" className="h-6 md:h-8" alt="Apple Pay" />
                    <img src="/Crypto & Web3 Payments.svg" className="h-6 md:h-8" alt="Binance" />
                </div>

                {/* Contador */}
                <div className="flex justify-center gap-4 md:gap-8 relative z-10">
                    <TimeUnit value={timeLeft.dias} label="Días" />
                    <div className="text-3xl md:text-4xl font-black text-primary mt-4 self-start">:</div>
                    <TimeUnit value={timeLeft.horas} label="Horas" />
                    <div className="text-3xl md:text-4xl font-black text-primary mt-4 self-start">:</div>
                    <TimeUnit value={timeLeft.minutos} label="Minutos" />
                    <div className="text-3xl md:text-4xl font-black text-primary mt-4 self-start">:</div>
                    <TimeUnit value={timeLeft.segundos} label="Segundos" />
                </div>

                {/* Marquee Inferior (UX Mejorado - Outline) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0">
                    <motion.div
                        animate={{ x: [-1500, 0] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-12 text-[10rem] md:text-[15rem] font-black italic"
                        style={{ WebkitTextStroke: '1px #FFFFFF', color: 'transparent' }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <span key={i}>ACCESO DE POR VIDA —</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
