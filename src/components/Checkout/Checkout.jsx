import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import FormularioCheckout from './FormularioCheckout'; // Importa correctamente el componente
import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    repetirEmail: ""
  });
  const { carrito, precioTotal} = useContext(CartContext);
  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();
    
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: String(Date.now()),
      estado: false,
      total: precioTotal(),
    };

    
    if(datosForm.email !== datosForm.repetirEmail){
      alert("Los campos de email deben ser iguales")
      return
    }

    
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => {
        
        setDatosForm({
          nombre: "",
          telefono: "",
          email: "",
          repetirEmail: ""
        });

        
        setIdOrden(respuesta.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="orden">
          <h2>Orden Generada correctamente!!</h2>
          <p>N° de orden: {idOrden} </p>
          <Link className="boton-orden" to="/">
            Ver mas productos
          </Link>
        </div>
      ) : (
        <FormularioCheckout
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};
export default Checkout;
