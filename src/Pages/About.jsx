import React from 'react'
import { Link } from "react-router-dom";

import styles from "../components/about.module.css";
import Gallery from "../components/Gallery/gallery";
import art from "../components/img/art.jpg";
import design from "../components/img/design.jpg";
import florals from "../components/img/florals.jpg";
import mountain from "../components/img/mountain.jpg";
import paint from "../components/img/paint.jpg";
import coffees from "../components/img/coffees.jpg";
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
    img={art}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={florals}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={coffees}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={design}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={paint}
    text="Something for everyone, connecting people together, one moment at a time."
    />
    <Gallery
    img={mountain}
    text="Something for everyone, connecting people together, one moment at a time."
    />
</div>
</>
  )
}

export default About;