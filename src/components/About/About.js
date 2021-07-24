import React from "react";
import Wrapper from "../Helpers/Helper";
import classes from "./About.module.css";

const About = () => {
  return (
    <Wrapper>
      <div className={classes.aboutContainer}>
        <p className={classes.tag}>Project by :</p>
        <div className={classes.inline}>
          <h1 className={classes.myLogo}>AngryRocket789</h1>
          <a href={"https://github.com/Angryrocket789"}>
            <i class="fab fa-github"></i>
          </a>
          <a href={"https://wa.me/919588652837?text=Hey%20Romal"}>
            <i class="fab fa-whatsapp"></i>
          </a>
          <a
            href={
              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=romalg13@gmail.com&body=Hey%20Romal"
            }
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
