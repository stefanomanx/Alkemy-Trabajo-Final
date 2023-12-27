import React, { createContext, useEffect, useState } from 'react';
import { PRODUCTS } from "../products";

// Obtiene el carrito de compras por defecto.

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

// El componente del proveedor del contexto de la tienda.

function ShopContextProvider(props) {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Agrega un elemento al carrito de compras.

  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => (
      { ...prevCartItems, [itemId]: prevCartItems[itemId] + 1 }
    ));
  };
  
  // Remueve un elemento del carrito de compras.

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => (
      { ...prevCartItems, [itemId]: prevCartItems[itemId] - 1 }
    ));
  };

  // Actualiza la cantidad de un elemento en el carrito de compras.

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prevCartItems) => (
      { ...prevCartItems, [itemId]: newAmount }
    ));
  };

  // Obtiene el monto total del carrito de compras.

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount = totalAmount + (itemInfo.price * cartItems[item]);
    }
    return totalAmount;
  };

  // Vacía el carrito de compras.

  const emptyCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    emptyCart
  };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
