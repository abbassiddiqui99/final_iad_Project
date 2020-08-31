import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        alt=""
        src="https://lh3.googleusercontent.com/kdoXoPgaXf3MpyN_CY6cOvD80bBRsrr3jXGf2s2v7MQNMsBj0dZfd1GBIisds1oy3I6SMrnSch1ygM9d2faVU7ZCGnHZV_fg7owXxp5tWtiwnAtl89HE_iJ6CUganwOF3b9S0HeiNGxngwNWcZHVVSkgZDD7-yjyuq9vPMpjeymqQg2nV6Vf3-LPVsV-xLk-cMiSp_5W9gbnEapBvWYS4hCohPOIT4wZ62qXkRKg1o22gm0xThVGPdVz3pGP3qhQTC4zelTzIZipwd2os81lpsDf4IIXhdLYwmLbVkh20tcLkfydx41Fz3OV4N4dkjwbQAmatmwuL28Ar6rkrpNhwvBZyAysc2eo_jrS5Ujq_hxkO_zoPc2nokcxtfAMBflA3eXotxdzea7e4cVzMDiOWV5ltBjALF1PeWfD-D_VQV-IigBjEZnyUASW-BDfFDumX2SmYk-NLDYslFKnFcRRQeBZ_W1H0NC07efegluqM66Cyh_VaMBp4ztP62p--8sWf8TqjH7yCnAp0KB8K4SVG7QtVkq9ls212bd3eNhjV-FoUaAeQLje6IzSiLSquIXu9gYQfWd1AtiBlcmozEvwAsQkkV1qz9kmqgePfV0mO6Yhxg0UBUYVHwUvDt-rICfiSHXQwzzujcofvwJh5juGSodJ0MHezo4gF9_1wKHT2ll6lRDzVDdBL6bbT40fvw=w959-h304-no?authuser=0"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your cart, To buy an item's, click "Add to
            basket" button next to the item's
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {/* List out all of the Checkout Products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
