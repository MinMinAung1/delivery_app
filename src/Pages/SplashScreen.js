import React from "react";
import classes from "./SplashScreen.module.css";
// import { useNavigate } from "react-router-dom";

// const nav = useNavigate()

const Splash_Screen = () => {
  return (
    <div class="container" className={classes.container}>
      <div className={classes.top_section}>
        <img
          src="https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-letter-d-logo-template-vector-icon-design-png-image_5547065.png"
          alt="Logo"
        ></img>
      </div>
      <div className={classes.bottom_section}>
        <h1>Non-Contact Deliveries</h1>
        <p>
          When placing an order, select the option "Contactless Delivery" and
          the courier will leave your order at the door.
        </p>
        <button className={classes.order_btn}>Order Now</button>
        <a href="#" className={classes.dis}>
          DISMISS
        </a>
      </div>
    </div>
  );
};

export default Splash_Screen;