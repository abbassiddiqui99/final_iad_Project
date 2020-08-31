import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, price, rating, title, image }) {
  //   const product_rating = Array(rating).fill();
  //   const stars = product_rating.map((star) => <p>⭐</p>);
  //   console.log(product_rating, stars);
  //   console.log(rating);
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span>⭐</span>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
