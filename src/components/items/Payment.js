import React from "react";
import classes from './Detail.module.css'

const Payment = () => {
  return (
    <>
      <div class="container" className={classes.container}>
        <div class="navbar" className={classes.navbar}>
          <span class="arrow" className={classes.arrow}>←</span>
          <div class="section payment-method" className={classes.payment_method}>
            <div class="section-title" className={classes.section_title}>Payment method</div>
            <div>💳 **** **** **** 4747</div>
          </div>

          <div  className={classes.delivery_options}>
            <div className={classes.section_title}>Delivery options</div>
            <div class="option" className={classes.option}>
              <input type="radio" name="delivery" id="pick-up"></input>
              <label for="pick-up">I’ll pick it up myself</label>
            </div>
            <div className={classes.option}>
              <input type="radio" name="delivery" id="courier"></input>
              <label for="courier">By courier</label>
            </div>
            <div className={classes.selected}>
              <input type="radio" name="delivery" id="drone" checked></input>
              <label for="drone">By Drone</label>
            </div>
          </div>

          <div className={classes.non_contact_delivery}>
            <div className={classes.toggle_switch}>
              <label for="non-contact">Non-contact delivery</label>
              <label className={classes.switch}>
                <input type="checkbox" id="non-contact" checked></input>
                <span className={classes.slider}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
