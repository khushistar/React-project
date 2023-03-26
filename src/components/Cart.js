import React from "react";

function Cart({cartitem}) {
    console.log(cartitem)
  return (
    <div>
      {!cartitem ? "" :cartitem.map((item) => {
           return   <div className="cart-imgtag" key={item.id}>
        {/* <div className="length">{item.id}</div> */}
           <div className="cart-product">
             <div className="cartimg">
               <img src={item.image} alt="img" />
             </div>
             <div className="about-product">
                 <p className="price">$ {item.price}</p>
             </div> 
           </div>
         </div>
   
      })}
           
    </div>
  )
}

export default Cart;


