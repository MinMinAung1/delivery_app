import React from "react";
import Header from "../layout/Header";

const Layout = (props) => {
  return (
    <div>
      <main>{props.children}</main>
      <Header />
    </div>
  );
};

export default Layout;
