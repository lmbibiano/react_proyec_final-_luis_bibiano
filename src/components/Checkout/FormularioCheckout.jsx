import { Form, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const FormularioCheckout = () => {
  const [pedidoId, setPedidoId] = useState("")
  const { carrito, precioTotal, borrarProducto,borrarTodo } = useContext(CartContext);

    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
          cliente: data,
          producto: carrito,
          total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
          .then((doc) => {
            setPedidoId(doc.id);
            borrarTodo();

          });
    }
    if(pedidoId) {
      return(
        <div>
          <h1>Tu compra se realizo con exito</h1>
          <p>tu numero de pedido es: {pedidoId}</p>
        </div>
      )
    }

  return (
    <div className="contenedor"> 
    <h1>finalizar compra</h1>
        <form action="" onSubmit={handleSubmit(comprar)}>  
            <input type="text" placeholder='ingresa tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='ingresa tu correo' {...register("email")}/>
            <input type="email" placeholder='repeti tu correo' {...register("email")}/>
            <input type="text" placeholder='direccion' {...register("direccion")}/>
            <button className='enviar' type='submit'>enviar</button>
        </form>   
    </div>
  )
}

export default FormularioCheckout;
