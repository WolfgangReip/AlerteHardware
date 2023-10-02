import Bandeau from '../components/Bandeau';
import NavBar from '../components/NavBar';

export default function Contact() {
    const titre = 'Config Personnalisée';
    const descript =
        'Contactez-moi pour une configuration personnalisée adaptée à vos besoins';
    const couleur = 'bg-gradient-to-r from-yellow-500 to-red-500';
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
