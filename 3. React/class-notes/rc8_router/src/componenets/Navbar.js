import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        Products
      </NavLink>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/products">Products</a> */}
    </div>
  );
};
export default Navbar;