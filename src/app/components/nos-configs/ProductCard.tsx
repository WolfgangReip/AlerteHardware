// ProductCard.tsx
import React, { useState } from 'react';
import { Product } from './types';
import ProductComponentsList from './ProductComponentsList';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='relative cursor-pointer m-4 shadow-lg transform transition-transform hover:scale-105 bg-card-background-color w-80 rounded-3xl font-tertiary'>
            <div className='relative bg-gradient-to-r from-pink-500 to-indigo-700 rounded-t-3xl pt-12 pb-4'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-red-600 to-orange-600 text-white text-2xl shadow-xl -skew-y-12 px-4 py-2'>
                    {product.price}€
                </div>
                <p className='mb-4 text-white text-center font-tertiary'>
                    {product.description}
                </p>
            </div>
            <div className='rounded-b-3xl p-4'>
                <ProductComponentsList components={product.components} />
            </div>
        </div>
    );
};

export default ProductCard;
