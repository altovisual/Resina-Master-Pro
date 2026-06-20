import React from 'react';
import { motion } from 'framer-motion';
import boxMascotas from '../assets/bonos/box (1).png';
import boxLogo from '../assets/bonos/box (2).png';
import boxMoldes from '../assets/bonos/box (4).png';
import boxNFC from '../assets/bonos/box (5).png';
import boxTaza from '../assets/bonos/box (6).png';
import boxBebe from '../assets/bonos/BOX (7).jpg';

const bonuses = [
    { img: boxLogo, alt: "Bono 1", title: "Diseña tu Logo desde Cero", price: "35" },
    { img: boxMoldes, alt: "Bono 2", title: "Creación de Moldes Caseros", price: "39" },
    { img: boxMascotas, alt: "Bono 3", title: "Identificadores de Mascotas", price: "29" },
    { img: boxNFC, alt: "Bono 4", title: "Llaveros con Tecnología NFC", price: "24" },
    { img: boxTaza, alt: "Bono 5", title: "Efecto Taza Ombré", price: "32" },
    { img: boxBebe, alt: "Bono 6", title: "Recuerdos de Recién Nacido", price: "45" }
];

const Bonuses = () => {
    return (
        <section className="py-20 bg-black px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                        Si accedes <span className="text-primary italic">HOY</span> Recibirás Estos 6 <br /> BONOS Totalmente Gratis!
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 max-w-6xl mx-auto">
                    {bonuses.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                                <img
                                    src={b.img}
                                    alt={b.alt}
                                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center px-4 w-full">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wide">
                                    {b.title}
                                </h3>
                                <span className="text-gray-400 text-sm md:text-base font-bold line-through decoration-red-500/70 decoration-2 mb-1">
                                    Precio Normal: ${b.price} USD
                                </span>
                                <span className="text-primary font-black text-lg uppercase tracking-tighter mb-1">
                                    ¡GRATIS!
                                </span>
                                <span className="text-[10px] text-white/80 uppercase tracking-widest mt-1 font-medium">
                                    con la compra de <span className="text-primary font-bold">Resina Master Pro</span>
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
