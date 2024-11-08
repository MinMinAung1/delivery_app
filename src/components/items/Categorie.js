import React from "react";
import classes from "./Categorie.module.css";
import { Link } from "react-router-dom";

const Categorie = (props) => {
  return (
    <Link to="/items" className={classes.link}>
      <div data-price="50" className={classes.item}>
      <div>
          <img src={props.image} alt="itemphoto"></img>
        </div>
        <div className={classes.info}>
          <h4>{props.name}</h4>
          <p>{props.quantity}</p>
        </div>
      </div>
    </Link>
  );
};

export default Categorie;
