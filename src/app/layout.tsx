import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const bebas = Bebas_Neue({
    weight: ['400'],
    variable: '--font-Title',
    fallback: ['Helvetica', 'sans-serif'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Alerte Hardware',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${inter.className} ${bebas.variable} `} lang='en'>
            <body className='max-h-screen ml-16 mr-16'>{children}</body>
        </html>
    );
}
