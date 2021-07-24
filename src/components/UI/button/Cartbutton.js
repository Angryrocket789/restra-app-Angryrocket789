import React from "react";
import classes from "./Cartbutton.module.css";
const Cartbutton = (props) => {
  return (
    <div>
      <button
        className={classes["cart-button"]}
        onClick={props.onClickCartButton}
      >
        <i className="fas fa-shopping-cart"></i>
        <span>Your Cart</span>
        <div className={classes.smallCircle}>
          {props.onNotification.reduce((acc, data) => {
            return +data.number + acc;
          }, 0)}
        </div>
      </button>
    </div>
  );
};

export default Cartbutton;
