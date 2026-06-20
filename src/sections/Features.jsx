import React from 'react';
import TiltedCard from '../components/react-bits/TiltedCard';
import GradientText from '../components/react-bits/GradientText';
import { motion } from 'framer-motion';
import { Unlock, Gift, BookOpen, ShieldCheck } from 'lucide-react';

// Importación dinámica de todas las imágenes en la carpeta de portfolio usando Vite glob
const imagesGlob = import.meta.glob('../assets/portfolio/*.jpg', { eager: true });
const portfolioImages = Object.keys(imagesGlob).map(path => imagesGlob[path].default);

const features = [
    {
        title: "Acceso de por vida",
        description: "Acceso inmediato e ilimitado para siempre a las videoclases optimizadas para móvil y PC.",
        icon: <Unlock className="w-8 h-8 text-primary" />,
        img: portfolioImages[5] // Llaveros de letras
    },
    {
        title: "6 Bonos Exclusivos",
        description: "Obtén plantillas de costos, acceso a proveedores recomendados, clases de empaque y diseño de logos.",
        icon: <Gift className="w-8 h-8 text-primary" />,
        img: portfolioImages[2] // Separador de libros
    },
    {
        title: "Guía de Resina Pro",
        description: "Tu manual digital con 100 pasos prácticos para dominar el vertido, tiempos de curado y evitar burbujas.",
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        img: portfolioImages[3] // Libreta / Cuaderno (Agenda)
    },
    {
        title: "Garantía de Satisfacción",
        description: "Prueba el método completo por 7 días. Si no logras tus primeras piezas perfectas, te devolvemos el 100%.",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        img: portfolioImages[0] // Reloj de pared
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
                                <img 
                                    src={f.img} 
                                    alt={f.title} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" 
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-0 pointer-events-none" />
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="bg-black/75 p-4 rounded-full border border-primary/40 backdrop-blur-md group-hover:scale-110 group-hover:border-primary transition-all duration-300">
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
