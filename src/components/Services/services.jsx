
import React from "react";
import Styles from "./services.module.css";

const Services = (props) => {

  return (
  
    <div className={Styles.service}>
    <div className={Styles.icons}>
     <img src={props.img} alt=""/>
     </div>
      <span className={Styles.service_text}>{props.description}</span>
    </div>
 
  );
};

export default Services;