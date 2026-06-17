import React from 'react';
import TiltedCard from '../components/react-bits/TiltedCard';
import GradientText from '../components/react-bits/GradientText';
import { motion } from 'framer-motion';
import { Unlock, Gift, BookOpen, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: "Acceso inmediato",
        description: "Una vez realices la compra, tendrás acceso inmediato a nuestro curso en la plataforma de Hotmart.",
        icon: <Unlock className="w-8 h-8 text-primary" />,
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" // Tech/Online access
    },
    {
        title: "3 Bonos exclusivos",
        description: "Accede a 3 bonos exclusivos que potencializarán tus conocimientos.",
        icon: <Gift className="w-8 h-8 text-primary" />,
        img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400" // Gifts
    },
    {
        title: "Guía Exclusiva",
        description: "Contamos con una guía con 100 pasos que te ayudará hacer más fácil tu proceso de aprendizaje.",
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400" // Book/Guide
    },
    {
        title: "7 Días de garantía",
        description: "Si consideras que el contenido no es satisfactorio, te devolvemos tu dinero.",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" // Guarantee/Safe
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-black px-4 relative overflow-hidden">
            {/* Fondo en X */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
                <motion.div
                    animate={{ x: ["0%", "-200%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute text-[10vw] font-black whitespace-nowrap rotate-[15deg] text-primary uppercase"
                    style={{ width: "200%" }}
                >
                    {"RESINA MASTER PRO • TÉCNICAS PROFESIONALES • ARTE ÚNICO • ".repeat(5)}
                </motion.div>

            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <GradientText>Luz, Resina, ¡Creación!</GradientText>
                    </motion.h2>
                    <p className="text-gray-400">Garantía profesional y acceso inmediato de por vida</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <TiltedCard key={i} className="bg-gray-900/50 border border-gray-800 p-2 group overflow-hidden backdrop-blur-sm">
                            <div className="h-48 overflow-hidden rounded-2xl mb-4 relative">
                                <img src={f.img} alt={f.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black/60 p-4 rounded-full border border-primary/30 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                                        {f.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-tighter italic">{f.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{f.description}</p>
                            </div>
                        </TiltedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
