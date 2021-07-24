import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Cartbutton from "../button/Cartbutton";
import Wrapper from "../../Helpers/Helper";
import Cart from "../cart/Cart";
const Navbar = (props) => {
  const [showModal, setshowModal] = useState(false);

  const displayModal = () => {
    setshowModal(true);
  };
  const closeModal = () => {
    // props.onAddingItemtoCart.reduce((data, acc) => {
    //   return +data.number + acc;
    // }, 0);
    setshowModal(false);
  };
  const Scrolldown = () => {
    props.onChange.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      <nav className={`${classes["nav-bar"]}`}>
        <ul>
          <li onClick={Scrolldown}>Menu</li>
          <li>Locations</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <Cartbutton
          onClickCartButton={displayModal}
          onNotification={props.onAddingItemtoCart}
        ></Cartbutton>
      </nav>
      {showModal && (
        <Cart onConfirm={closeModal} onGetArr={props.onAddingItemtoCart}></Cart>
      )}
    </Wrapper>
  );
};

export default Navbar;
