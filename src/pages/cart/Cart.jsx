import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componente que representa el carrito de compras.Muestra los productos agregados al carrito, el total de la compra y opciones para vaciar el carrito, realizar la compra o continuar comprando.

function Cart() {
  const { cartItems, getTotalCartAmount, emptyCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  //Función que muestra una notificación de compra exitosa mediante la librería react-toastify.

  const displayPurchaseNotification = () => {
    toast.success('Gracias por su compra! Su total fue de $' + totalAmount + '.');
  };

  const handleConfirmPurchase = () => {
    displayPurchaseNotification();
    setTimeout(() => {
      emptyCart();
    }, 5000); // Delay de 5 segundos para vaciar el carrito luego de la compra.
  };

  return (
    <div className='cart'>
      <div className="cartTitle">
        <h1>Tu carrito</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem data={product} key={product.id} />
            )
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
          <div>
            <h2 className="totalAmount">Total: ${totalAmount}</h2>
            <button onClick={() => emptyCart()}>Vaciar carrito</button>
            <button onClick={handleConfirmPurchase}>Confirmar compra</button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <button onClick={() => navigate("/")}>Continuar comprando</button>
          </div>
      </div>
      ) : ( 
        <h1>No hay productos en el carrito</h1>
      )}
    </div>
  )
};

export default Cart;
