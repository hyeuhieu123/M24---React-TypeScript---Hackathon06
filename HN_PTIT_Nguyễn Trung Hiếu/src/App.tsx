// src/App.tsx
import React, { useState } from 'react';
import ProductList from '../src/components/ProductList';
import Cart from '../src/components/Cart';
import Notification from '../src/components/Notification';
import { Product } from './models/Product';
import { useLocalStorage } from './hooks/useLocalStorage';
import './index.css';

const initialProducts: Product[] = [
  { id: 1, name: 'Pizza', description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis aliquam exercitationem, incidunt optio reprehenderit eligendi cupiditate atque esse iure harum? Quia est nulla velit accusamus impedit quibusdam veritatis vero?', price: 30, image: './src/assets/images/pizza.jpg', quantity: 10 },
  { id: 2, name: 'Hamburger', description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis aliquam exercitationem, incidunt optio reprehenderit eligendi cupiditate atque esse iure harum? Quia est nulla velit accusamus impedit quibusdam veritatis vero?', price: 15, image: './src/assets/images/hamburger.jpg', quantity: 5 },
  { id: 3, name: 'Bread', description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis aliquam exercitationem, incidunt optio reprehenderit eligendi cupiditate atque esse iure harum? Quia est nulla velit accusamus impedit quibusdam veritatis vero?', price: 20, image: './src/assets/images/bread.jpg', quantity: 8 },
  { id: 4, name: 'Cake', description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis aliquam exercitationem, incidunt optio reprehenderit eligendi cupiditate atque esse iure harum? Quia est nulla velit accusamus impedit quibusdam veritatis vero?', price: 10, image: './src/assets/images/cake.jpg', quantity: 0 },
];

const App: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useLocalStorage<Product[]>('cartItems', []);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'danger' } | null>(null);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      setNotification({ message: 'Add to cart successfully', type: 'success' });
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setNotification({ message: 'Add to cart successfully', type: 'success' });
    }
  };

  const updateCartItem = (product: Product, quantity: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    setNotification({ message: 'Update successfully', type: 'info' });
  };

  const deleteCartItem = (product: Product) => {
    const updatedItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedItems);
    setNotification({ message: 'Delete successfully', type: 'danger' });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              <ProductList products={products} onAddToCart={addToCart} />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Cart cartItems={cartItems} onUpdateCartItem={updateCartItem} onDeleteCartItem={deleteCartItem} />
          {notification && <Notification message={notification.message} type={notification.type} />}
        </div>
      </div>
    </div>
  );
};

export default App;