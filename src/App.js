import React, { useState, useRef } from "react";
import classes from "./App.module.css";
import Navbar from "./components/UI/Navbar/Navbar";
import Scroll from "./components/UI/Scroll/Scroll";
import Menu from "./components/menu/Menu";
import About from "./components/About/About";
const App = () => {
  let count = 0;
  const obj = [
    {
      id: "d1",
      title: "Schnitzel",
      description: "A German Speciality",
      price: 16.55,
      number: 1,
    },
  ];
  const [dishArr, setDishArr] = useState(obj);
  const scrollDown = useRef();
  const sendData = (array) => {
    setDishArr((prevArray) => {
      console.log(array.title);
      console.log(prevArray[0]);
      for (let i = 0; i < prevArray.length; i++) {
        if (prevArray[i].title === array.title) {
          count = 1;
          prevArray[i].number = +prevArray[i].number + +array.number;
          return [...prevArray];
        }
      }
      if (count === 0) {
        return [array, ...prevArray];
      }
    });
  };
  return (
    <div className={classes["parent-div"]}>
      <Navbar onAddingItemtoCart={dishArr} onChange={scrollDown} />
      <div className={classes.nameRendering}>
        <h1 className={classes.restraName}>Dragon and Eel.</h1>
        <p className={classes.smallHeading}>A place where tradition meets</p>
      </div>
      <Scroll onChange={scrollDown}></Scroll>
      <div ref={scrollDown} className={classes.SecondPage}></div>
      <Menu onGetData={sendData}></Menu>
      <About></About>
    </div>
  );
};

export default App;
