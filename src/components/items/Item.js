import React, { useContext } from "react";
import classes from "./Item.module.css";
import { FaEuroSign } from "react-icons/fa";
import { CartContext } from "../../store/cartContext";
import { CgShoppingCart } from "react-icons/cg";
import { IoCheckmarkSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export const Item = (props) => {
  const cartContext = useContext(CartContext);
  const cart = cartContext.isCart(props.id);

  function CartHandler() {
    if (cart) {
      cartContext.removeCart(props.id);
    } else {
      cartContext.addCart({
        id: props.id,
        name: props.name,
        iamge: props.image,
        price: props.price,
        description: props.description,
      });
    }
  }

  return (
    <>
      <div className={classes.product_item}>
        <img
          src={props.image}
          className={classes.product_image}
          alt="Boston Lettuce"
        ></img>
        <div className={classes.product_info}>
          <h4>{props.name}</h4>
          <p>{props.price} <FaEuroSign/></p>
        </div>
        <button className={classes.heart}>
        <CiHeart />
        </button>
        <button className={classes.add_button} onClick={CartHandler}>
          {cart ? <IoCheckmarkSharp /> : <CgShoppingCart />}
        </button>
      </div>
    </>
  );
};
