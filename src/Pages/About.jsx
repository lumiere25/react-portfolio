import React from 'react'
import styles from "../components/about.module.css";
import art from "../components/img/art.jpg";
import colorsp from "../components/img/colorsp.jpg";
import design from "../components/img/design.jpg";
import florals from "../components/img/florals.jpg";
import mountain from "../components/img/mountain.jpg";
import paint from "../components/img/paint.jpg";
import coffees from "../components/img/coffees.jpg";

const About = () => {
  return (
    <>
    <div className={styles.about_container}>
   <h1>What We Do</h1>  
   </div>

<div className={styles.project_grid}>
  <div className={styles.project} id="dangle">
  <img src={art} alt="art"/>
  <div className={styles.text}>
  <p>"Something for everyone, connecting people together, one moment at a time."</p>
  </div>
  </div>
  <div className={styles.project} id="spot">
  <img src={coffees} alt="coffees"/>
  <div className={styles.text}>
  <p>"Leaving all behind, we journey to new frontiers of discovery, on and on"</p>
  </div>
  </div>
  <div className={styles.project} id="loaf">
  <img src={florals} alt="florals"/>
  <div className={styles.text}>
  <p>"Let art be your guide , the strokes of a brush brings all together"</p>
  </div>
  </div>
  <div className={styles.project} id="test">
  <img src={design} alt="design"/>
  <div className={styles.text}>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, suscipit.</p>
  </div>
  </div>
  <div className={styles.project} id="springer">
  <img src={mountain} alt="mountain photography"/>
  <div className={styles.text}>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, suscipit.</p>
  </div>
  </div>
  <div className={styles.project} id="fruit">
  <img src={paint} alt="paint"/>
  <div className={styles.text}>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, suscipit.</p>
  </div>
  </div>
  </div>
</>
  )
}

export default About;