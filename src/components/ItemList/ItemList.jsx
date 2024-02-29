import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {

  return (
    <div className="item-list">
      { 
        productos.map((producto) => (
          <Item  producto={producto} key={producto.nombreid}/>
        ))
      }
    </div>
  );
};

export default ItemList;