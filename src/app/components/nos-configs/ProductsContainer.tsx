import React, { FC, ReactElement } from "react";
import { Configuration } from "./types";
import ProductCard from "./ProductCard";

interface ProductsContainerProps {
  products: Configuration[];
}

const ProductsContainer: FC<ProductsContainerProps> = ({
  products,
}): ReactElement => (
  <div className="flex flex-wrap justify-center mt-14">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

export default ProductsContainer;
