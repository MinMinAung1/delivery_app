import React from "react";
import classes from "./ItemDetails.module.css";

const ItemDetails = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <span className={classes.arrow}>←</span>
          <h2>Vegetables</h2>
        </div>

        <div className={classes.search_bar}>
          <input type="text" placeholder="Search"></input>
        </div>
        <div className={classes.category_tabs}>
          <div class="tab" className={classes.selected}>
            Cabbage and lettuce (14)
          </div>
          <div className={classes.tab}>Cucumber</div>
          <div className={classes.tab}>Onions and garlic</div>
          <div className={classes.tab}>Peppers</div>
        </div>

        <div className={classes.product_list}>
          <div className={classes.product_item}>
            <img
              src="https://via.placeholder.com/60"
              className={classes.product_image}
              alt="Boston Lettuce"
            ></img>
            <div className={classes.product_info}>
              <h4>Boston Lettuce</h4>
              <p>1.10 € / piece</p>
            </div>
            <button className={classes.add_button}>Add</button>
          </div>
          <div className={classes.product_item}>
            <img
              src="https://via.placeholder.com/60"
              className={classes.product_image}
              alt="Boston Lettuce"
            ></img>
            <div className={classes.product_info}>
              <h4>Boston Lettuce</h4>
              <p>1.10 € / piece</p>
            </div>
            <button className={classes.add_button}>Add</button>
          </div>
          <div className={classes.product_item}>
            <img
              src="https://via.placeholder.com/60"
              className={classes.product_image}
              alt="Boston Lettuce"
            ></img>
            <div className={classes.product_info}>
              <h4>Boston Lettuce</h4>
              <p>1.10 € / piece</p>
            </div>
            <button className={classes.add_button}>Add</button>
          </div>
          <div className={classes.product_item}>
            <img
              src="https://via.placeholder.com/60"
              className={classes.product_image}
              alt="Boston Lettuce"
            ></img>
            <div className={classes.product_info}>
              <h4>Boston Lettuce</h4>
              <p>1.10 € / piece</p>
            </div>
            <button className={classes.add_button}>Add</button>
          </div>
        </div>

        <div class="footer" className={classes.footer}>
          <span class="footer-icon" className={classes.footer_icon}>
            🏠
          </span>
          <span class="footer-icon" className={classes.footer_icon}>
            📦
          </span>
          <span class="footer-icon" className={classes.footer_icon}>
            👤
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
