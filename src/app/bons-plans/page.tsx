import Bandeau from '../components/Bandeau';
import NavBar from '../components/NavBar';

export default function NosConfigs() {
    const titre = 'Bons plans';
    const descript = 'Ici vous trouverez chaque composant au meilleur prix';
    const couleur = 'bg-gradient-to-r from-red-500 to-pink-500';
    return (
        <>
            <NavBar />
            <main className='mt-20 pt-6'>
                <Bandeau
                    titre={titre}
                    description={descript}
                    couleur={couleur}
                />
            </main>
        </>
    );
}
