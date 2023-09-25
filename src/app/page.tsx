'use client';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Mon titre de page</title>
                <meta
                    name='description'
                    content='Une brève description de la page.'
                />
                {/* Autres balises meta pour le SEO si nécessaire */}
            </Head>
            <div className='bg-black min-h-screen flex justify-center'>
                <main>
                    <div className='flex items-center justify-center'>
                        <h1 className='class="text-8xl bg-gradient-to-t from-joli-mauve to-cyan-qui-pète-sa-mère custom-webkit-properties test-font'>
                            ALERTE HARDWARE
                        </h1>
                    </div>
                </main>
            </div>
        </>
    );
}
