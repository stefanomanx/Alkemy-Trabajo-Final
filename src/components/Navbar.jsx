import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'

// Componente de barra de navegación.

function Navbar() {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/"> ShopCart&reg; </Link>
      </div>
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
