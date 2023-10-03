// ProductComponentsList.tsx
import { Component } from './types';

interface ProductComponentsListProps {
    components: Component[];
}

const ProductComponentsList: React.FC<ProductComponentsListProps> = ({
    components,
}) => (
    <ul>
        {components.map((comp) => (
            <li key={comp.id} className='my-1'>
                {comp.name}
            </li>
        ))}
    </ul>
);

export default ProductComponentsList;
