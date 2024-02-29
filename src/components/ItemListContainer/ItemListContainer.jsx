import React, { useEffect, useState } from 'react';
import obtenerProductos from '../../utilidades/data';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = ({ producto }) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("categoria", "==", category )) : productosRef;
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
          )
      })

  }, [category]);

  return (
    <div className="item-list-container">
      <div>
        <section className='principal'>
          <div className="partner">
            <h1 className="partner-titulo">Lideres en ventas </h1>
            <h3 className="partner-subtitulo">en todo el pais</h3>
          </div>
          <img className='logo1' src="../public/logo-arom.png" alt="" />
        </section>
      </div>
      <h2>Todos los productos</h2>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
