import { useContext } from 'react';

import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

import "./Carrito.css"

const Carrito = () => {
  const { carrito, precioTotal, borrarProducto,borrarTodo} =
  useContext(CartContext);
  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>no tienes productos en el carrito</h2>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className='carrito'>
      <div className='lista'>
        {carrito.map((producto) => (
          <div className="producto" key={producto.id}>
            <div>
                <p className="nombre">{producto.titulo}</p>          
                <img className="imagen" src={producto.imagen} alt={producto.nombre}/>
            </div>
                <p className="texto">cantidad: {producto.cantidad}</p>
                <p className="texto">precio c/u: ${producto.precio}</p>
                <button onClick={() => borrarProducto(producto.id)}>borrar</button>
          <div>
      </div>
    </div>
        ))}
      </div>
      <div className='total-abajo'>
      <div className="botones-carrito-borrar" onClick={borrarTodo}>
          <button>Vaciar carrito</button>
        </div>
        <h3>total: ${precioTotal()}</h3>

        <Link className="botones-carrito-continuar" to="/checkout">
          <p>Continuar con la compra</p>
        </Link>
        </div>

      
    </div>
    
  );
};

export default Carrito
