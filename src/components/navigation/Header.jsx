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
      <img  className={Styles.logo} src={logo} alt=""/>
      <NavLink className={Styles.link} to="/">Home</NavLink>
      <NavLink className={Styles.link}to="/about">About</NavLink>
      <NavLink className={Styles.link}to="/contact">Contact</NavLink>
      <NavLink className={Styles.link}to="/signup">SignUp</NavLink>
     </li>
     </ul>
    </nav>
    </header>
    </>
  )
}
export default Navigation;
  


  