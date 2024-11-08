import React from "react";
import Header from "../layout/Header";
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    // <div>
    //   <main className={classes.main}>{props.children}</main>
    //   <Header />
    // </div>

<div>
<main>{props.children}</main>
<Header />
</div>
  );
};

export default Layout;
