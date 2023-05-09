import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import styles from "../components/Gallery/gallery.module.css";
import Gallery from "../components/Gallery/gallery";
import interactive from "../components/img/interactive.jpg";
import creative from "../components/img/creative.jpg";
import butterfly from "../components/img/butterfly.jpg";
import showtime from "../components/img/showtime.jpg";
import paint from "../components/img/paint.jpg";
import reading from "../components/img/reading.jpg";
import back from "../components/img/back.png";



const About = () => {
 
  return (
    <>
    <div className={styles.about_container}>
   <h1>How We Go About Our Day</h1>  
   <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam, velit"</p>
   </div>
   <div className={styles.backContainer}>
   <Link to="/">
   <img className={styles.arrow} src={back} alt=""/>
   </Link>
   </div>

   <div className={styles.project_grid}>
    <Gallery
    img={interactive}
    text="Learn"
    />
    <Gallery
    img={butterfly}
    text="Create"
    />
    <Gallery
    img={showtime}
    text="Showcase"
    />
    <Gallery
    img={creative}
    text="Play"
    />
    <Gallery
    img={paint}
    text="Dive into Imagination"
    />
    <Gallery
    img={reading}
    text="Make Friends"
    />
</div>
</>
  )
}

export default About;