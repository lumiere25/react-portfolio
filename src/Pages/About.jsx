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
   <h1>Our Vision</h1>  
   <p>"Our preschool provides a safe and nurturing environment for young children to learn, play, and grow. Our experienced teachers are dedicated to helping each child develop their social, emotional, cognitive, and physical skills through a variety of age-appropriate activities and educational programs. We encourage curiosity, creativity, and a love of learning through play-based exploration, hands-on experiences, and interactive lessons. "</p>
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