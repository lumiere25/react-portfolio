import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Styles from "./services.module.css";

const Services = (props) => {
  return (
    <div className={Styles.service}>
    <FontAwesomeIcon className={Styles.icons} icon={props.icon} />
 <span className={Styles.service_text}>{props.description}</span>
   </div>

  )
}

export default Services;