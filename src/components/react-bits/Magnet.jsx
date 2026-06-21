import React, { useState, useRef, useEffect } from "react";

const Magnet = ({ children, padding = 100, disabled = false, strength = 2, className = "" }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const magnetRef = useRef(null);

    useEffect(() => {
        // No registrar listener en dispositivos táctiles — innecesario y consume recursos
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (disabled || isTouchDevice) {
            setPosition({ x: 0, y: 0 });
            return;
        }

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            if (distance < padding) {
                setPosition({ x: deltaX / strength, y: deltaY / strength });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [padding, disabled, strength]);

    return (
        <div
            ref={magnetRef}
            className={`inline-block transition-transform duration-200 ease-out ${className}`}
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        >
            {children}
        </div>
    );
};

export default Magnet;
