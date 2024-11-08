import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { IoGridOutline } from "react-icons/io5";
import { CartContext } from '../../store/cartContext';

const Header = () => {

  const cartContext = useContext(CartContext);

  return (
    <footer className={classes.header}>
        <ul>
                <li>
                    <Link to='/categories'><IoGridOutline /></Link>
                </li>
                <li>
                    <Link to='/checkout'><CgShoppingCart /></Link>
                    <span className={classes.badge}>{cartContext.totalCart}</span> 
                </li>
                <li>
                    <Link to='/profile'><FiUser /></Link>
                </li>
            </ul>
    </footer>
  )
}

export default Header