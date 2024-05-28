import React from 'react';
import { Product } from '../models/Product';
import CartItem from './CartItem';

interface Props {
  cartItems: Product[];
  onUpdateCartItem: (product: Product, quantity: number) => void;
  onDeleteCartItem: (product: Product) => void;
}

const Cart: React.FC<Props> = ({ cartItems, onUpdateCartItem, onDeleteCartItem }) => (
  <div className="panel panel-danger">
    <div className="panel-heading">
      <h1 className="panel-title">Your Cart</h1>
    </div>
    <div className="panel-body">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "4%" }}>STT</th>
            <th>Name</th>
            <th style={{ width: "15%" }}>Price</th>
            <th style={{ width: "4%" }}>Quantity</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id}
              index={index}
              product={item}
              onUpdateCartItem={onUpdateCartItem}
              onDeleteCartItem={onDeleteCartItem}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              There are <b>{cartItems.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} USD
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
);

export default Cart;