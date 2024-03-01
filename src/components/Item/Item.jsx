import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="Item">
      <img className='img-productos' src={"/" + producto.imagen} alt={producto.id} />
      <p>{producto.titulo}</p>
      <p>${producto.precio}</p>
      <Link to={`/detalle/${producto.id}`}><button>Ver más</button></Link>
    </div>
  );
};

export default Item;
