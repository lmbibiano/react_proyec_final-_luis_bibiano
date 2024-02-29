import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {
  const  {productId}  = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    
    const docRef = doc(db, "productos", productId)
    getDoc(docRef)
      .then((resp) =>{
       setProducto({ ...resp.data(), id: resp.id });
      })

  }, [productId]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;

