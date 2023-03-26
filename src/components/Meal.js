import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import Mealitem from "./Mealitem";
import "../App.css";

function Meal({cartitem, setCartitem}) {
    const navigate = useNavigate();
  
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);

//   console.log(cartitem, setCartitem)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItem(data);
        setShow(true);
      });
  }, [url]);

  const searchallitem = () => {
    setUrl(`https://fakestoreapi.com/products`);
  };
  const searchitem = () => {
    setUrl(`https://fakestoreapi.com/products/category/jewelery`);
  };
  const searchElectronics = () => {
    setUrl(`https://fakestoreapi.com/products/category/electronics`);
  };
  const searchmancloths = () => {
    setUrl(`https://fakestoreapi.com/products/category/men's clothing`);
  };
  const searchwomancloths = () => {
    setUrl(`https://fakestoreapi.com/products/category/women's clothing`);
  };
  const searchoneitem = () => {
    setUrl(`https://fakestoreapi.com/products?sort=desc`);
  };
   

  
  const Addtocart = (item) => {
  
     setCartitem([...cartitem , item])
//    console.log(item)
//    console.log(cartitem)
  }

  return (
    <>
      <div className="Foods">
        <div className="text">
          <h1>Buy your product</h1>
          <div className="fill">
            <button className="sbtn" onClick={() => searchallitem()}>
              All
            </button>
            <button className="sbtn" onClick={() => searchitem()}>
              Jewelery
            </button>
            <button className="sbtn" onClick={() => searchElectronics()}>
              Electronics
            </button>
            <button className="sbtn" onClick={() => searchmancloths()}>
              Men cloths
            </button>
            <button className="sbtn" onClick={() => searchwomancloths()}>
              Woman cloths
            </button>
            <button className="sbtn" onClick={() => searchoneitem()}>
              Each
            </button>
          </div>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartPlus} onClick={() => { navigate(`/cart`) }}/> 
         
            <span>{cartitem.length}</span>
            </div>    
        </div>
        {show ? <Mealitem data={item} Addtocart ={Addtocart}/> : ""}
      </div>
    </>
  );
}

export default Meal;
