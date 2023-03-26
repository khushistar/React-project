
import React,{useState} from 'react';
import './App.css';
import Meal from './components/Meal';
import Iteminfo from './components/Iteminfo';
import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartitem, setCartitem]  = useState([]);
  return (
    <>
      <BrowserRouter>
     
        <Routes>
         <Route path="/" element={ <Meal cartitem={cartitem} setCartitem = {setCartitem}/>}></Route>
         <Route path="/single-product/:id" element={ <Iteminfo />}></Route>
         <Route path="/cart" element={ <Cart cartitem={cartitem}/>}></Route>
        </Routes>
       
      </BrowserRouter>
      {/* <Meal/> */}
    </>
  );
}

export default App;
