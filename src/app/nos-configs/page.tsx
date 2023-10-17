import NavBar from '../components/NavBar';
import Bandeau from '../components/Bandeau';
import ProductComponentsList from '../components/nos-configs/ProductsContainer';
import ProductCard from '../components/nos-configs/ProductCard';
import ProductsContainer from '../components/nos-configs/ProductsContainer';
import { Product } from '../components/nos-configs/types';
import { client } from '../../utils/sanity/client';

export default async function NosConfigs() {
    const descript =
        'Retrouvez toutes nos configurations aux meilleurs prix pour tous les budgets';
    const couleur = 'bg-gradient-to-r from-joli-mauve to-indigo-500';

    const products = await client.fetch(`*[_type == "configuration"]`);

    console.log('PRODCUT', products);

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
