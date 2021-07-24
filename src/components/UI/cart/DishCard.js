import React, { useState } from "react";
import Wrapper from "../../Helpers/Helper";
import classes from "./DishCard.module.css";
const DishCard = (props) => {
  const [increaseDish, setIncreaseDish] = useState(props.number);

  const increaseAmount = () => {
    setIncreaseDish((i) => {
      props.onAdding(+props.price);
      return +i + 1;
    });
  };
  const decreaseAmount = () => {
    setIncreaseDish((i) => {
      if (+i === 0) {
        props.onAdding(0);
        return 0;
      }
      props.onAdding(+-props.price);
      return +i - 1;
    });
  };

  return (
    <Wrapper>
      <div className={classes.upperContainer}>
        <div className={classes.titleAndPrice}>
          <div>
            <h1 className={classes.dishTitle}>{props.title}</h1>
          </div>
          <div>
            <p className={classes.priceofDishes}>${props.price}</p>
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
      <hr className={classes.divider}></hr>
    </Wrapper>
  );
};

export default DishCard;
