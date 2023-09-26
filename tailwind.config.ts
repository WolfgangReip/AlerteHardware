import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'joli-mauve': '#b207f8',
                'cyan-qui-pète-sa-mère': ' #07eaf8 ',
            },
            animation: {
                'draw-border': 'drawBorder 1.2s forwards',
            },
            keyframes: {
                drawBorder: {
                    '0%': { width: '0%', height: '0%' },
                    '25%': { width: '100%', height: '0%' },
                    '50%': { width: '100%', height: '100%' },
                    '75%': { width: '0%', height: '100%' },
                    '100%': { width: '0%', height: '0%' },
                },
            },
        },
        fontFamily: {
            title: 'var(--font-Title)',
        },
    },
    plugins: [],
};
export default config;
