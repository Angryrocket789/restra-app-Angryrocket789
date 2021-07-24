import React, { useState } from "react";
import Wrapper from "../../Helpers/Helper";
import classes from "./Cart.module.css";
import DishCard from "./DishCard";
const Cart = (props) => {
  const [increaseDish, setIncreaseDish] = useState([0]);

  const setMultipleforTotal = (data) => {
    for (let i = 0; i < props.onGetArr.length; i++) {
      if (data > 0) {
        if (data === props.onGetArr[i].price) {
          props.onGetArr[i].number++;
        }
      } else if (data < 0) {
        if (data === -props.onGetArr[i].price) {
          props.onGetArr[i].number--;
        }
      }
    }
    setIncreaseDish((prevdata) => {
      return [...prevdata, data];
    });
  };
  return (
    <Wrapper>
      <div className={classes.overlay} onClick={props.onConfirm}></div>
      <section className={classes.modalWindow}>
        {props.onGetArr.map((data) => (
          <DishCard
            key={data.id}
            title={data.title}
            description={data.description}
            price={data.price}
            number={data.number}
            onAdding={setMultipleforTotal}
          ></DishCard>
        ))}
        {/* <div className={classes.upperContainer}>
          <div className={classes.titleAndPrice}>
            <div>
              <h1 className={classes.dishTitle}>Sushi</h1>
            </div>
            <div>
              <p className={classes.priceofDishes}>$22.99</p>
              <p className={classes.numeberofDishes}>x{increaseDish}</p>
            </div>
          </div>
          <div className={classes.twoButtons}>
            <button className={classes.plusButton} onClick={increaseAmount}>
              +
            </button>
            <button className={classes.minusButton} onClick={decreaseAmount}>
              -
            </button>
          </div>
        </div>
        <hr className={classes.divider}></hr> */}
        {/*-------------------- */}
        {/*-------------------------*/}
        {/* <div className={classes.totalAmountContainer}>
          <div>
            <h1>Total Amount</h1>
          </div>
          <div>
            <h1>${(increaseDish * 22.99).toFixed(2)}</h1>
          </div>
        </div> */}
        <div className={classes.totalAmountContainer}>
          <div>
            <h1>Total Amount</h1>
          </div>
          <div>
            <h1>
              $
              {props.onGetArr
                .reduce((acc, data) => {
                  return +data.price * +data.number + acc;
                }, 0)
                .toFixed(2)}
            </h1>
          </div>
        </div>
        <div className={classes.closeAndOrder}>
          <button onClick={props.onConfirm}>Close</button>
          <button>Order</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Cart;
