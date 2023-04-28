import React from 'react'
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
   <h1>What We Do</h1>  
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam, velit adipisci eos ullam veritatis, dolorum quidem aut doloribus vel hic laudantium ratione amet officiis odit unde sunt deserunt recusandae.</p>
   </div>
   <div className={styles.backContainer}>
   <Link to="/home">
   <img className={styles.arrow} src={back} alt=""/>
   </Link>
   </div>

   <div className={styles.project_grid}>
    <Gallery
    img={interactive}
    text="Play, explore, Have fun and learn! This is our motto, and we believe will be your child's motto too!"
    />
    <Gallery
    img={butterfly}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={showtime}
    text="Kids will get their creative spark and showcase their creations on Show Your Spark days."
    />
    <Gallery
    img={creative}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={paint}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={reading}
    text="Something for everyone, connecting people together, one moment at a time."
    />
</div>
</>
  )
}

export default About;