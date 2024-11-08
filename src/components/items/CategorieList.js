import React from "react";
import classes from './CategorieList.module.css';
import Categorie from "./Categorie";


const CategorieList = (props) => {
  return (
    <>
      <div>
        <div className={classes.container}>
          <div className={classes.navbar}>
            <span className={classes.arrow}>←</span>
            <h2>Categories</h2>
          </div>

          <div className={classes.search_bar}>
            <input type="text" placeholder="Search"></input>
          </div>
          <div className={classes.product_list}>
          {props.items.map((item) => (
            <Categorie
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorieList;
