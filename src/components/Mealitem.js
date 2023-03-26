import React from "react";
import { useNavigate } from "react-router-dom"
import "../App.css";
function Mealitem({ data,Addtocart }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="item">
        {!data
          ? ""
          : data.map((item) => {
              return (
                <div className="imgtag" key={item.id}>
                  <div className="product">
                    <div className="img">
                      <img src={item.image} alt="img" />
                    </div>
                    <div className="about-product">
                        <p className="cate-name">{item.title}</p>
                        <p className="price">$ {item.price}</p>
                        <button onClick={() => { navigate(`/single-product/${item.id}`) }}>detail</button>
                        <button onClick={() =>Addtocart(item)}>Add to cart</button>
                    </div> 
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Mealitem;
