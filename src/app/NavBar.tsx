// NavBar.js
'use client';

import { useEffect, useState } from 'react';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full text-center p-4 z-50 transition-all duration-300 ${
                scrolled ? 'bg-opacity-80 bg-gray-800' : 'bg-transparent'
            }`}>
            {/*... contenu de la navigation ...*/}
        </nav>
    );
}
