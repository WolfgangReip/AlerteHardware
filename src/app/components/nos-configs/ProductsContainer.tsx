import { Product } from './types';
import ProductCard from './ProductCard';

interface ProductsContainerProps {
    products: Product[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => (
    <div className='flex flex-wrap justify-center mt-14'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
);

export default ProductsContainer;
