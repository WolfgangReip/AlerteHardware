import Link from 'next/link';
import '../styles/globals.css';
import MonSVG from './Svg';

export default function NavBar() {
    return (
        <header className='draw flex items-center justify-between p-6 pr-32 text-xl text-white fixed w-full top-0 left-0 secondary-font h-20'>
            <MonSVG width={53.61} height={53.33} style={{ marginLeft: '7%' }} />
            <nav>
                <div className='flex space-x-8'>
                    <Link href='/'>
                        <div className='underline-hover-effect link-color-1'>
                            Accueil
                        </div>
                    </Link>
                    <Link href='/nos-configs'>
                        <div className='underline-hover-effect link-color-2'>
                            Nos Configs
                        </div>
                    </Link>
                    <Link href='/bons-plans'>
                        <div className='underline-hover-effect link-color-3 '>
                            Bons Plans
                        </div>
                    </Link>
                    <Link href='/contact'>
                        <div className='underline-hover-effect link-color-4'>
                            Config Personnalisée
                        </div>
                    </Link>
                    {/* Vous pouvez ajouter d'autres liens si nécessaire */}
                </div>
            </nav>
        </header>
    );
}
