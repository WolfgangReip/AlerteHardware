import Link from 'next/link';
import './globals.css';

export default function NavBar() {
    return (
        <nav className='draw flex space-x-6 p-4 text-white'>
            <Link href='/'>
                <div className='underline-hover-effect'>Accueil</div>
            </Link>
            <Link href='/about'>
                <div className='underline-hover-effect'>À propos</div>
            </Link>
            {/* Vous pouvez ajouter d'autres liens si nécessaire */}
        </nav>
    );
}
