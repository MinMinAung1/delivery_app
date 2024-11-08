import React from "react";
import classes from './CategorieList.module.css';
import Categorie from "./Categorie";


const CategorieList = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.item_list}>
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
    </>
  );
};

export default CategorieList;
