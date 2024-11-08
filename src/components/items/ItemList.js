import React from 'react'
import classes from "./ItemList.module.css";
import { Item } from './Item';

const ItemList = (props) => {
  return (
    <>
    <div className={classes.container}>
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
    </>
  )
}

export default ItemList