import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

// Componente que representa un elemento del carrito de compras.

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  // Maneja el evento de clic en el botón de remover un producto del carrito.

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  // Maneja el evento de cambio en la cantidad de un producto en el carrito.

  const handleUpdateCartItemCount = (count, id) => {
    updateCartItemCount(count, id);
  };

  //Maneja el evento de clic en el botón de agregar un producto al carrito.

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div className='cartItem'>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>
            {productName}
          </b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => handleRemoveFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(event) => handleUpdateCartItemCount(Number(event.target.value), id)}></input>
          <button onClick={() => handleAddToCart(id)}> + </button>
          <p className="totalPrice">Total del producto: ${price * cartItems[id]}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
