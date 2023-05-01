import React from "react";
import Styles from "./scroll.module.css";

const ScrollToTop = (props) => {
  return (
  <div>
    <img className={Styles.scroll_img} src={props.img} alt=""/>
  </div>
    
  )
}

export default ScrollToTop;