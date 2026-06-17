import { useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextPressure = ({
    text = 'Resina Master Pro',
    fontFamily = 'serif',
    fontSize = 'clamp(2rem, 8vw, 5rem)',
    fontWeight = 400,
    fontStyle = 'normal',
    width = '100%',
    flex = true,
    alpha = false,
    stroke = false,
    widthWeight = 100,
    italicWeight = 0,
    className = '',
}) => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const chars = useMemo(() => text.split(''), [text]);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
            style={{
                fontFamily,
                fontSize,
                fontWeight,
                fontStyle,
                width,
                display: flex ? 'flex' : 'inline-block',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}
        >
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: i * 0.05,
                        duration: 0.5,
                    }}
                    className="inline-block"
                    style={{
                        color: stroke ? 'transparent' : 'inherit',
                        WebkitTextStroke: stroke ? '1px currentColor' : 'none',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

export default TextPressure;
