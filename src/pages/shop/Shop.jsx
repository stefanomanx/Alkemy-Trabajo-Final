import React from 'react';
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";

// Componente de la página de la tienda. Muestra una lista de productos.

function Shop() {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h2>Indumentaria</h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
};

export default Shop;
