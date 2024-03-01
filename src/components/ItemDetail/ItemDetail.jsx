import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const { añadirProductoAlCarrito } = useContext(CartContext);

  const añadirProducto = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };
    añadirProductoAlCarrito(productoCarrito);
    console.log(`${ (producto.imagen)}`);
  };

  return (
    <div className="ItemDetail">
      <div className="parte-izquierda">
      <img className="img-detail" src= {"/" + producto.imagen} alt={producto.titulo} />
        <h2>{producto.titulo}</h2>
      </div>
      <div className="ficha" dangerouslySetInnerHTML={{ __html: producto.ficha }} />
      <div className="barra-precio">
        <div>
          <ItemCount stock={producto.stock} añadirProducto={añadirProducto} />
        </div>
        <p>${producto.precio}</p>
      </div>
      <div className="terminar-compra">
        <img className="tarjetas-img" src="/public/img/tarjetas_bancos.jpg" alt="" />
      </div>
    </div>
  );
};

export default ItemDetail;
