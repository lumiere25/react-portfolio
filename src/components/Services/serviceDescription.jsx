import React from "react";
import Styles from "./services.module.css";
const serviceDescription = (props) => {
  return (
   <div className={Styles.services_desc}>
   <h2>{props.desc}</h2>
   </div>
  )
}
export default serviceDescription;