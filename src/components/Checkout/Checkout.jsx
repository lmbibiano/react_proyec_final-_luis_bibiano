import { useContext, useState } from "react";

import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";

import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    repetirEmail: ""
  });
  const { carrito, precioTotal } = useContext(CartContext);
  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();
    //le damos formato a la orden
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: String(Date.now()),
      estado: false,
      total: precioTotal(),
    };

    //comparamos que los email sean iguales
    if(datosForm.email !== datosForm.repetirEmail){
      alert("Los campos de email deben ser iguales")
      return
    }

    //subimos la orden a firebase
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => {
        //borramos los datos de los inputs
        setDatosForm({
          nombre: "",
          telefono: "",
          email: "",
        });

        //guardamos el id de la orden en una variable de estado
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
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};
export default Checkout;