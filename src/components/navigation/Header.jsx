import React from 'react'
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";
import logo from "../img/logo2.png";

const Navigation  = () => {
  return (
  <>
   <header>
     <nav>
     <ul>
     <li>
      <img  className={Styles.logo} src={logo} alt="logo"/>
      <NavLink className={Styles.links} to="/">Home</NavLink>
      <NavLink className={Styles.links} to="/about">About</NavLink>
      <NavLink className={Styles.links} to="/contact">Contact</NavLink>
      <NavLink className={Styles.links} to="/signup">SignUp</NavLink>
     </li>
     </ul>
    </nav>
    </header>
    </>
  )
}
export default Navigation;
  


  