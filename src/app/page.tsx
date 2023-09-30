'use client';
import Head from 'next/head';
import NavBar from './NavBar';
import MonSVG from './svg';

export default function Home() {
    return (
        <>
            <Head>
                <title>Alerte Hardware</title>
                <meta
                    name='description'
                    content='Une brève description de la page.'
                />
            </Head>
            <NavBar />
            <main className='flex flex-col justify-center min-h-screen pt-20'>
                <div className='flex items-center justify-evenly space-x-18'>
                    <h1 className='text-9xl font-title animate-slideIn'>
                        <span className='text-white block'>ALERTES</span>
                        <span className='gradient-text block'>HARDWARE</span>
                    </h1>
                    <MonSVG width={321.89} height={320} />
                </div>
            </main>
        </>
    );
}
