/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00F5D4', // Turquesa vibrante de la caja de bonos
                    dark: '#00D2C4',
                },
                secondary: {
                    DEFAULT: '#FFD700', // Oro
                }
            },
            fontFamily: {
                tanker: ['Tanker', 'sans-serif'],
                sans: ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
