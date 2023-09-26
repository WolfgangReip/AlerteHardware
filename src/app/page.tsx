'use client';
import Head from 'next/head';

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

            <main>
                <div className='flex h-screen items-center ml-16'>
                    <h1 className='text-9xl font-title'>
                        <span className='text-white block'>ALERTES</span>
                        <span className='bg-gradient-to-t from-joli-mauve to-cyan-qui-pète-sa-mère custom-webkit-properties block'>
                            HARDWARE
                        </span>
                    </h1>
                </div>
            </main>
        </>
    );
}
