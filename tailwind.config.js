/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'WorkSans': ['Work Sans', 'sans-serif'],
                'Playfair': ['"Playfair Display", serif']
            },
            keyframes: {
                animatedgradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            animation: {
                gradient: 'animatedgradient 6s ease infinite alternate',
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
}