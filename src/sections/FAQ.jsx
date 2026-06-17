import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "¿Necesito conocimientos previos?",
        a: "No, el curso está diseñado para llevarte desde cero absoluto hasta un nivel profesional."
    },
    {
        q: "¿Recibo algún certificado?",
        a: "Sí, al finalizar todos los módulos recibirás un certificado de finalización de Resina Master Pro."
    },
    {
        q: "¿Cómo accedo al contenido?",
        a: "Una vez realizado el pago, recibirás un correo con tus accesos inmediatos a nuestra plataforma exclusiva."
    },
    {
        q: "¿Tengo garantía de satisfacción?",
        a: "Claro que sí. Tienes 7 días de garantía incondicional. Si no te gusta, te devolvemos el 100% de tu dinero."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-gray-900/10 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border-b border-gray-800 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full py-4 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg transition-colors ${openIndex === i ? 'text-primary' : 'text-white group-hover:text-primary/70'}`}>
                                    {f.q}
                                </span>
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-4 text-gray-400 leading-relaxed">
                                            {f.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
