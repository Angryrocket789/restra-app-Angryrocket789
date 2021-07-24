import React from "react";
import classes from "./Menu.module.css";
import Card from "../UI/Card/Card";
// let arr = [];
const Menu = (props) => {
  const sendDishData = (data) => {
    // arr.push(data);
    props.onGetData(data);
  };
  return (
    <section className={classes.menuRender}>
      <div className={classes.foodDescriptionTextbox}>
        <h1>Delicious Food , Delivered To You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
          repellendus distinctio cum. Laudantium, eum soluta iusto temporibus ab
        </p>
        <p>
          quasi totam! In officia corporis vitae consequatur aliquam quod magni,
          accusantium similique porro nemo.
        </p>
      </div>
      <div className={classes.dishesContainer}>
        <Card
          dishTitle={"Sushi"}
          description={"Finesh fish and veggies"}
          price={22.99}
          onAddclick={sendDishData}
        ></Card>
        <Card
          dishTitle={"Schnitzel"}
          description={"A German Speciality"}
          price={16.55}
          onAddclick={sendDishData}
        ></Card>
        <Card
          dishTitle={"Barbecue Burger"}
          description={"American , raw , meaty"}
          price={12.99}
          onAddclick={sendDishData}
        ></Card>
        <Card
          dishTitle={"Green Bowl"}
          description={"Healthy and green"}
          price={18.99}
          onAddclick={sendDishData}
        ></Card>
      </div>
    </section>
  );
};

export default Menu;
