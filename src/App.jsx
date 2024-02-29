import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContailner';

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/product/:category' element={<ItemListContainer />} />
        <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
