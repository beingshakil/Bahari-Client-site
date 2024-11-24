/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import all_Product from '../Components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_Product.forEach((product) => {
    cart[product.id] = 0; // Initialize each product's cart count
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1,}));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: Math.max(prev[itemId] - 1, 0), // Prevent negative cart count
    }));
  };

  const contextValue = { all_Product, cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
