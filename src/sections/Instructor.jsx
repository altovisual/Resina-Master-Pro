import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../components/react-bits/SplitText';
import TextPressure from '../components/react-bits/TextPressure';
import GradientText from '../components/react-bits/GradientText';
import TiltedCard from '../components/react-bits/TiltedCard';
import instructorImg from '../assets/55.webp';

const Instructor = () => {
    return (
        <section className="py-20 bg-gray-900/30 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full md:w-1/2"
                >
                    <TiltedCard className="cursor-target">
                        <img
                            src={instructorImg}
                            alt="Instructora"
                            className="w-full h-auto rounded-3xl"
                            loading="lazy"
                        />
                    </TiltedCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl font-bold mb-6 truncate-none">
                        ¿Quién Será Nuestra <br />
                        <GradientText><span className="text-primary font-light">Instructora Especial?</span></GradientText>
                    </h2>
                    <div className="text-gray-400 text-lg mb-8 leading-relaxed space-y-4">
                        <p>
                            Soy Andrea Bolívar, artista de resina epóxica con más de 6 años de experiencia. Lo que comenzó como curiosidad creativa se transformó en una marca, una tienda física y en una comunidad de más de 4.000 clientes y 300 alumnos a nivel mundial que hoy confían en mi trabajo.
                        </p>
                        <p>
                            He trabajado desde lo micro hasta lo macro: desde piezas pequeñas cargadas de detalle, hasta proyectos de gran formato que exigen precisión, estructura y acabados impecables. Cada creación ha sido una lección, cada error un aprendizaje, y cada cliente una oportunidad para elevar mi estándar.
                        </p>
                        <p>
                            La resina no es solo un material para mí. Es técnica, es química, es diseño, es visión empresarial y es arte en su estado más puro. Por eso nunca he dejado de capacitarme. Me actualizo constantemente en nuevas técnicas, tendencias y acabados profesionales, porque creo firmemente que quien enseña debe estar siempre a la vanguardia.
                        </p>
                        <p>
                            Mi sello es claro: acabados profesionales, procesos limpios y piezas que compiten en cualquier mercado. Pero más allá de crear, mi verdadera pasión es enseñar.
                        </p>
                        <p>
                            Quiero abrirte las puertas a este hermoso camino de la resina epóxica, desde lo más básico hasta lo más avanzado. No solo aprenderás a mezclar y verter, aprenderás a dominar el material, a entenderlo, a evitar errores costosos y a convertir tu talento en una oportunidad real de crecimiento.
                        </p>
                        <p>
                            Aquí no solo vas a hacer piezas. Vas a construir criterio, seguridad y nivel profesional. Si yo pude transformar una pasión en una marca con alcance nacional e internacional, tú también puedes hacerlo.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">6+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Años Exp.</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">4K+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Clientes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">300+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Alumnos Globales</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Instructor;
