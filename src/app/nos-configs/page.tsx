import NavBar from '../components/NavBar';
import Bandeau from '../components/Bandeau';

export default function NosConfigs() {
    const descript =
        'Retrouvez toutes nos configurations aux meilleurs prix pour tous les bugets';
    const couleur = 'bg-gradient-to-r from-joli-mauve to-indigo-500';
    return (
        <>
            <NavBar />
            <main className='mt-20 pt-6'>
                <Bandeau
                    titre='Nos Configs'
                    description={descript}
                    couleur={couleur}
                />
            </main>
        </>
    );
}
