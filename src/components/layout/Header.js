import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { IoGridOutline } from "react-icons/io5";
import { CartContext } from "../../store/cartContext";

const Header = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className={classes.footer}>
      <div>
        <Link to="/categories" className={classes.footer_icon}>
          <IoGridOutline />
        </Link>
      </div>
      <div>
        <Link to="/checkout" className={classes.footer_icon}>
          <CgShoppingCart />
        </Link>
        <span className={classes.badge}>{cartContext.totalCart}</span>
      </div>
      <div>
        <Link to="/payment" className={classes.footer_icon}>
          <FiUser />
        </Link>
      </div>
    </div>
  );
};

export default Header;
