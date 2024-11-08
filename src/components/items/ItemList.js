import React from "react";
import classes from "./ItemList.module.css";
import { Item } from "./Item";

const ItemList = (props) => {
  return (
    <>
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
          {props.items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
