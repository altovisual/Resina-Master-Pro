import React from 'react';

const GradientText = ({
    children,
    className = "",
    colors = ["#00ff62ff", "#50a4bbff", "#00ffbfff", "#50bb8eff", "#00fbffff"],
    animationSpeed = 8,
    showBorder = false,
    as: Tag = "div",
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <Tag className={`relative inline-block ${className}`}>
            {showBorder && (
                <div
                    className="absolute -inset-[1px] rounded-lg animate-gradient-slow opacity-30"
                    style={gradientStyle}
                ></div>
            )}
            <span
                className="relative bg-clip-text text-transparent animate-gradient-slow bg-[length:300%_100%] block px-4 py-2 -mx-4 -my-2"
                style={gradientStyle}
            >
                {children}
            </span>
        </Tag>
    );
};

export default GradientText;
