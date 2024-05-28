import React from 'react';
import { Product } from '../models/Product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onAddToCart }) => (
  <div>
    {products.map(product => (
      <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;