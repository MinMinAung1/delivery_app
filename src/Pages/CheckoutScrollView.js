import React from 'react'
import classes from './CheckoutScrollView.module.css'
import { Link } from 'react-router-dom'

const CheckoutScrollView = () => {
  return (
    <>
        <div className={classes.container}>
        <div className={classes.navbar}>
            <span className={classes.arrow}>←</span>
            <h2><Link to='/payment' className={classes.checkout_link}>Checkout</Link></h2>
        </div>
        <div class="section" className={classes.payment_method}>
            <div className={classes.section_title}>Payment method</div>
            <div>💳 **** **** **** 4747</div>
        </div>

        <div className={classes.delivery_address}>
            <div className={classes.section_title}>
                <span class="icon">📍</span> Delivery address
            </div>
            <div className={classes.address}>
                Alexandra Smith<br></br>
                Casa St 2 St 5, SA Chai Riga<br></br>
                LV-1013<br></br>
                Latvia
            </div>
        </div>

        <div class="section" className={classes.delivery_options}>
            <div className={classes.section_title}>Delivery options</div>
            <div className={classes.option}><input type="radio" name="delivery" id="pick-up"></input><label for="pick-up">I’ll pick it up myself</label></div>
            <div className={classes.option}><input type="radio" name="delivery" id="courier"></input><label for="courier">By courier</label></div>
            <div class="option" className={classes.selected}><input type="radio" name="delivery" id="drone" checked></input><label for="drone">By Drone</label></div>
        </div>

        <div class="section non-contact-delivery" className={classes.non_contact_delivery}>
            <div className={classes.toggle_switch}>
                <label for="non-contact">Non-contact delivery</label>
                <label className={classes.switch}>
                    <input type="checkbox" id="non-contact" checked></input>
                    <span className={classes.slider}></span>
                </label>
            </div>
        </div>
        </div>
    </>
  )
}

export default CheckoutScrollView