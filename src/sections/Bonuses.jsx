import React from 'react';
import { motion } from 'framer-motion';
import bono1 from '../assets/BONO1 RESINA.png';
import bono2 from '../assets/BONO2 RESINA.png';
import bono3 from '../assets/BONO3 RESINA.png';

const bonuses = [
    { img: bono1, alt: "Bono 1", price: "35" },
    { img: bono2, alt: "Bono 2", price: "27" },
    { img: bono3, alt: "Bono 3", price: "24" }
];

const Bonuses = () => {
    return (
        <section className="py-20 bg-black px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Si accedes <span className="text-primary italic">HOY</span> Recibirás Estos 3 <br /> BONOS Totalmente Gratis!</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6 max-w-6xl mx-auto">
                    {bonuses.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={b.img}
                                alt={b.alt}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl mb-6"
                            />
                            <div className="flex flex-col items-center text-center px-4">
                                <span className="text-gray-400 text-lg md:text-xl font-bold line-through decoration-red-500/70 decoration-2 mb-2">
                                    Precio Normal: ${b.price} USD
                                </span>
                                <span className="text-primary font-black text-xl uppercase tracking-tighter mb-1">
                                    ¡GRATIS!
                                </span>
                                <span className="text-xs text-white uppercase tracking-widest mt-1 opacity-80 font-medium">
                                    con la compra de <br /> <span className="text-primary font-bold">Resina Master Pro</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
