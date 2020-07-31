import React from "react";
import { useStateValue } from "./components/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./components/CheckoutProduct";
import Subtotal from "./components/Subtotal";
function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/Launches/GWIngress/Revised/2300x646_PD_1X_ENG._CB409658301_.jpg"
          className="checkout__ad"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h2 className="checkout__titile">Your Shopping cart is empty</h2>
            <p>You have no items in your cart</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__titile">Your Shopping Cart</h2>
            {cart?.map((details) => (
              <CheckoutProduct
                id={details.id}
                title={details.title}
                price={details.price}
                image={details.image}
                rating={details.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
