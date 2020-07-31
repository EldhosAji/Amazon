import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
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
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating
            name="customized-5"
            defaultValue={rating}
            precision={0.1}
            value={rating}
            readOnly
          />
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
