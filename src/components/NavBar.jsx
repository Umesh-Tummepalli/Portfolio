import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Cursor from "./Cursor"
const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
      <Cursor />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
