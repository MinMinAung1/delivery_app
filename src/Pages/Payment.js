import React from "react";
import classes from './Payment.module.css'

const Payment = () => {
  return (
    <>
    <div className={classes.container}>
        <h2 style={{margin: "5px",color: "#8e44ad"}}>Credit / Debit card</h2>
        <div className={classes.card_preview}>
            <div className={classes.card_number}>4747 4747 4747 4747</div>
            <div className={classes.card_name}>ALEXANDRA SMITH</div>
            <div className={classes.card_expiry}>07/21</div>
            <div className={classes.mastercard_icon}></div>
        </div>
        <form>
            <div className={classes.form_group}>
                <label className={classes.card_name}>Name on card</label>
                <input type="text" id="card-name" placeholder="Alexandra Smith" />
            </div>
            <div className={classes.form_group}>
                <label for="card-number">Card number</label>
                <input type="text" id="card-number" placeholder="4747 4747 4747 4747" />
            </div>
            <div className={classes.expiry_cve_row}>
                <div className={classes.form_group}>
                    <label for="expiry-date">Expiry date</label>
                    <input type="text" id="expiry-date" placeholder="MM/YY" />
                </div>
                <div class="form-group" className={classes.form_group}>
                    <label for="cvc">CVC</label>
                    <input type="text" id="cvc" placeholder="474" />
                </div>
            </div>
            <button type="button" className={classes.use_card_button} style={{ marginTop: "20px",
            }}>USE THIS CARD</button>

        </form>
    </div>
    </>
  );
};

export default Payment;
