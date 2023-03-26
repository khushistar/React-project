/* eslint-disable jsx-a11y/iframe-has-title */
import "../App.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Iteminfo() {
  // const { idMeal } = useParams()
  const { id } = useParams();
  const [item, setItem] = useState("");

  if (id !== "") {
    // fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.meals[0])
        console.log(result);
        setItem(result);
      });
  }

  return (
    <>
      <div>
        {!item ? (
          ""
        ) : (
          <>
            <div className="info">
              <div className="myimg-info">
                <div className="myimg">
                  <img src={item.image} alt="img" />
                </div>
                <div className="about-product">
                  <h3>Category : {item.category} </h3>
                  <p>
                    <b>Description</b> : {item.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Iteminfo;
