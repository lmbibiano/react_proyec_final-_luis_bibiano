import "./NavBar.css"

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const CartWidget = () => {
  
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget">
    <div className="cart-widget">
        <p className="cantidad-productos">{cantidadTotal() != 0 && cantidadTotal()}</p>
        <button><FontAwesomeIcon className="icono-carrito" icon={faShoppingCart} /> </button>
    </div>
    </Link>
  );
};

export default CartWidget;