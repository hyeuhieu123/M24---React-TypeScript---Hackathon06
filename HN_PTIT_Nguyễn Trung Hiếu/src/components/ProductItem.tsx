import React from 'react';
import { Product } from '../models/Product';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onAddToCart }) => {
  const { name, description, price, image, quantity } = product;
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={image} alt={name} />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{name}</h4>
        <p>{description}</p>
        <span className="price">{price} USD</span>
        <button disabled={quantity === 0} onClick={() => onAddToCart(product)}>
          {quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
