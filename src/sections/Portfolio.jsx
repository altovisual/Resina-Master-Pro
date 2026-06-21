import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from '../components/react-bits/TiltedCard';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Importación LAZY — las imágenes se cargan cuando el componente entra en viewport
const imagesGlob = import.meta.glob('../assets/portfolio/*.jpg');

// Cache para no recargar si el componente remonta
let cachedProjects = null;

const loadProjects = async () => {
    if (cachedProjects) return cachedProjects;
    const entries = await Promise.all(
        Object.keys(imagesGlob).sort().map(async (path, index) => {
            const mod = await imagesGlob[path]();
            return {
                id: index + 1,
                img: mod.default,
                title: `Pieza de Arte #${index + 1}`,
                category: index % 3 === 0 ? "Joyería" : index % 3 === 1 ? "Accesorios" : "Decoración"
            };
        })
    );
    cachedProjects = entries;
    return entries;
};

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const sectionRef = useRef(null);

    // Cargar imágenes cuando la sección entra en viewport (Intersection Observer)
    useEffect(() => {
        const observer = new IntersectionObserver(
            async (entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                    const data = await loadProjects();
                    setProjects(data);
                }
            },
            { rootMargin: '200px' } // pre-carga 200px antes de que llegue al viewport
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Si no se muestran todas, limitamos a 6 proyectos inicialmente
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? visibleProjects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prevIndex) =>
            prevIndex === visibleProjects.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'Escape') {
                setSelectedIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, visibleProjects]);

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden" id="portfolio">
            {/* Fondo con brillo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,187,0.03),transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white italic mb-4 uppercase tracking-tighter"
                    >
                        Galería de Exclusividad
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <p className="text-primary text-lg md:text-xl font-bold uppercase tracking-[0.2em] border-b-2 border-primary/30 pb-2">
                            Trabajos de la Instructora
                        </p>
                    </motion.div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ delay: (index % 6) * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="cursor-target"
                            >
                                <TiltedCard className="w-full h-full">
                                    <div
                                        className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5 h-full cursor-pointer bg-gray-950/40"
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />

                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        {/* Insignia de Calidad */}
                                        <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md text-primary border border-primary/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {project.category}
                                        </div>
                                    </div>
                                </TiltedCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Botón de Ver Todo */}
                {projects.length > 6 && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 flex justify-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group relative px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,187,0.4)]"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                            <span className="relative z-10">
                                {showAll ? 'Ver Menos Trabajos' : `Ver Todos Los Trabajos (${projects.length})`}
                            </span>
                        </button>
                    </motion.div>
                )}

                {/* Mensaje motivador final */}
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 italic text-lg">
                        Piezas reales creadas con las técnicas que aprenderás en este curso.
                    </p>
                </motion.div>
            </div>

            {/* Lightbox / Modal de Imagen a Pantalla Completa */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md cursor-zoom-out"
                    >
                        {/* Botón Cerrar */}
                        <button
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-primary transition-all z-50 bg-black/60 p-3 rounded-full hover:scale-110 border border-white/10 hover:border-primary/50 shadow-lg cursor-pointer"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={28} />
                        </button>

                        {/* Botón Anterior */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all z-50 bg-black/60 p-3 rounded-full hover:scale-110 border border-white/10 hover:border-primary/50 shadow-lg cursor-pointer"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={36} />
                        </button>

                        {/* Contenedor e Imagen */}
                        <div className="relative max-w-[90%] max-h-[80vh] md:max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={selectedIndex}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                src={visibleProjects[selectedIndex]?.img}
                                alt={visibleProjects[selectedIndex]?.title}
                                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-2xl shadow-2xl select-none"
                            />
                        </div>

                        {/* Botón Siguiente */}
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all z-50 bg-black/60 p-3 rounded-full hover:scale-110 border border-white/10 hover:border-primary/50 shadow-lg cursor-pointer"
                            onClick={handleNext}
                        >
                            <ChevronRight size={36} />
                        </button>

                        {/* Info / Contador inferior */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-50 bg-black/60 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md flex flex-col items-center gap-0.5 select-none" onClick={(e) => e.stopPropagation()}>
                            <p className="text-white font-bold text-sm tracking-wide">
                                {visibleProjects[selectedIndex]?.title}
                            </p>
                            <p className="text-primary/70 text-xs font-semibold uppercase tracking-wider">
                                {selectedIndex + 1} / {visibleProjects.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
