import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

// Componente que representa un producto en la tienda.

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  // Agrega el producto al carrito.

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>
            {productName}
          </b>
        </p>
        <p>${price}</p>
        <button className='addToCartBttn' onClick={() => handleAddToCart(id)}>
          Agregar al carrito {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

export default Product;
