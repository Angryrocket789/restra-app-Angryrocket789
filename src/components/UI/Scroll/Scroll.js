import React from "react";

import classes from "./Scroll.module.css";
const Scroll = (props) => {
  const Scrolldown = () => {
    props.onChange.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <button className={classes.Scrollbtn} onClick={Scrolldown}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  );
};

export default Scroll;
