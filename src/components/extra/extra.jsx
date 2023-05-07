import React from "react";
import Styles from "./extra.module.css";

const Extra = (props) => {
  return (
    <>
  <div className={Styles.kindy_container}>
    <img className={Styles.kindy_image} src={props.img} alt="" />
  </div>
  <div className={Styles.kindy_image_container}>
  <p className={Styles.kindy_desc}>{props.desc} </p>
  </div>
 
  </>
  )
}

export default Extra;