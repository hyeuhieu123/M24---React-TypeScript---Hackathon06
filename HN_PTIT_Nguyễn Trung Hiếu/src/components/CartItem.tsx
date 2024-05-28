import React, { useState } from 'react';
import { Product } from '../models/Product';

interface Props {
  index: number;
  product: Product;
  onUpdateCartItem: (product: Product, quantity: number) => void;
  onDeleteCartItem: (product: Product) => void;
}

const CartItem: React.FC<Props> = ({ index, product, onUpdateCartItem, onDeleteCartItem }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleUpdate = () => {
    onUpdateCartItem(product, quantity);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.price} USD</td>
      <td>
        <input
          name={`cart-item-quantity-${product.id}`}
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </td>
      <td>
        <a className="label label-info update-cart-item" onClick={handleUpdate}>
          Update
        </a>
        <a className="label label-danger delete-cart-item" onClick={() => onDeleteCartItem(product)}>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default CartItem;