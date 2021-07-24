import React, { useRef } from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  // const [dishAmount, setdishAmount] = useState(1);
  const inputData = useRef();
  const sendDishData = () => {
    if (inputData.current.value === "") {
      inputData.current.value = 1;
    }
    let obj = {
      id: Math.random().toString(),
      title: props.dishTitle,
      description: props.description,
      price: props.price,
      number: inputData.current.value,
    };
    props.onAddclick(obj);
    inputData.current.value = "";
  };

  return (
    <ul>
      <li className={classes.item}>
        <div>
          <h1>{props.dishTitle}</h1>
          <p className={classes.dishdescription}>{props.description}</p>
          <p className={classes.dishprice}>${props.price}</p>
        </div>
        <div>
          <div className={classes.amount}>
            <label htmlFor="amount">Amount</label>
            <input
              ref={inputData}
              name="amount"
              placeholder={1}
              autoComplete="off"
            ></input>
          </div>
          <div>
            <button className={classes.addbtn} onClick={sendDishData}>
              +Add
            </button>
          </div>
        </div>
      </li>
      <hr></hr>
    </ul>
  );
};

export default Card;
