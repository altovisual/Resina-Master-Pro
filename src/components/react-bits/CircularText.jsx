import React from 'react';
import { motion } from 'framer-motion';

const CircularText = ({
    text = 'RESINA MASTER PRO • ',
    radius = 100,
    fontSize = '18px',
    color = '#00D1FF',
    speed = 10,
    className = '',
}) => {
    const letters = text.split('');
    const angleStep = 360 / letters.length;

    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
            <motion.div
                animate={{ rotate: 180 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="relative w-full h-full"
            >
                {letters.map((letter, i) => {
                    const angle = i * angleStep;
                    return (
                        <span
                            key={i}
                            className="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom font-bold uppercase tracking-widest"
                            style={{
                                height: radius,
                                transform: `rotate(${angle}deg)`,
                                color: color,
                                fontSize: fontSize,
                            }}
                        >
                            {letter}
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default CircularText;
