import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'joli-mauve': '#b207f8',
                'cyan-qui-pète-sa-mère': '#07eaf8',
                'card-background-color': '#242526',
            },
            backgroundImage: (theme) => ({
                'custom-gradient':
                    'linear-gradient(to bottom right, #07eaf8, #b207f8, #ed091c, #edde09)',
            }),
        },
        fontFamily: {
            title: 'var(--font-Title)',
            secondary: 'var(--secondary-font)',
        },
    },
    plugins: [],
};
export default config;
