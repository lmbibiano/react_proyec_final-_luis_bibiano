import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("todos los productos");
  const { category } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosRef = collection(db, "productos");
      let q;
  
      if (category) {
        q = query(productosRef, where("categoria.nombreid", "==", category));
        setTitulo(category)
      } else {
        q = productosRef;
        setTitulo("todos los productos");


      }
  
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProductos([]);
      setTimeout(() => { // Esperar un breve momento antes de cargar los nuevos productos
        setProductos(data);

      }, 100);
    };
  
    obtenerProductos();
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
      <h2>{titulo}</h2>
      {productos.length > 0 ? (
        <ItemList productos={productos} titulo={titulo} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;

