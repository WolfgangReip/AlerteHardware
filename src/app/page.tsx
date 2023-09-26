'use client';
import Head from 'next/head';
import NavBar from './NavBar';

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
            <main className='flex items-center justify-between h-screen ml-16 mr-40'>
                <h1 className='text-9xl font-title'>
                    <span className='text-white block'>ALERTES</span>
                    <span className='bg-gradient-to-t from-joli-mauve from-56% to-cyan-qui-pète-sa-mère custom-webkit-properties block'>
                        HARDWARE
                    </span>
                </h1>
                <div className='w-48 h-48 bg-gradient-radial from-cyan-qui-pète-sa-mère  via-joli-mauve to-transparent blur-xl rounded-full mr-20'></div>
            </main>
        </>
    );
}
