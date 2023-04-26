import React from "react";
import styles from "../about.module.css";

const Gallery = (props) => {
 return (
  <div className={styles.project}>
  <img src={props.img} alt="img"/>
  <p className={styles.text}>{props.text}</p>
</div>
)
}
export default Gallery;