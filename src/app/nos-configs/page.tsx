'use client';
import NavBar from '../components/NavBar';
import Bandeau from '../components/Bandeau';
import ProductComponentsList from '../components/nos-configs/ProductsContainer';
import ProductCard from '../components/nos-configs/ProductCard';
import ProductsContainer from '../components/nos-configs/ProductsContainer';
import { Product } from '../components/nos-configs/types';

export default function NosConfigs() {
    const descript =
        'Retrouvez toutes nos configurations aux meilleurs prix pour tous les budgets';
    const couleur = 'bg-gradient-to-r from-joli-mauve to-indigo-500';

    const products: Product[] = [
        {
            id: '1',
            name: 'Configuration 1',
            description: 'Petit budget, grandes ambitions!',
            price: 500,
            components: [
                { id: '1', name: 'test1' },
                { id: '2', name: 'test2' },
            ],
        },
        {
            id: '2',
            name: 'Configuration 2',
            description: 'Quand performance rime avec raison!',
            price: 800,
            components: [
                { id: '1', name: 'test1' },
                { id: '2', name: 'test2' },
            ],
        },
        {
            id: '3',
            name: 'Configuration 3',
            description: "Mille raisons d'être impressionné!",
            price: 1000,
            components: [
                { id: '1', name: 'test1' },
                { id: '2', name: 'test2' },
            ],
        },
    ];
    return (
        <>
            <NavBar />
            <main className='mt-20 pt-6'>
                <Bandeau
                    titre='Nos Configs'
                    description={descript}
                    couleur={couleur}
                />
                <ProductsContainer products={products} />
            </main>
        </>
    );
}
