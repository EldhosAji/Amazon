import React from "react";
import "./CheckoutProduct.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p>{title}</p>
        <p className="checkoutProduct__info__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__info__rating">
          <Rating
            name="customized-5"
            defaultValue={rating}
            precision={0.1}
            value={rating}
            readOnly
          />
        </div>
        <button onClick={removeItem}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
