import React from 'react'
import Styles from "../components/Home.module.css";
import { Link } from "react-router-dom";
import woman from "../components/img/woman.png";
import eclipse from "../components/img/Ellipse.png";
import newEclipse from "../components/img/Ellipsered.png";
import girl from "../components/img/girl.png";


const Home = () => {
  return (
    <>
    <div className={Styles.container}></div>
     <div className={Styles.main_container}>
     <div className={Styles.main_container_left}>
     <h4>#Find your passion</h4>
     <h1>Join us and start Today!</h1>
     <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus. Quisquam atque aliquam eos aspernatur sit voluptatum, repellat ipsam laudantium?
     </p>
     <div className={Styles.btn}>
     <Link to="/about" className={Styles.btn_lg}>Find out more.</Link>
      </div>
     </div>
     <div className={Styles.main_container_right}>
      <div className="transparent__image">
      <img src={woman} alt="Happy lady" />
     </div>
    </div>
  </div>
  <div className={Styles.blog_info}>
     <img className={Styles.ecliptic}src={eclipse} alt="" />
     <div className={Styles.p_text}>
     <i className="fas fa-quote-left"></i>
     <p>Coming here was the greatest descision I have made to this day"</p>
     </div>
     <div className={Styles.ecliptic_container}>
     <img className={Styles.ecliptic_red} src={newEclipse} alt="ecliptic"/>
     </div>
     <div className={Styles.girl_container}>
     <img className={Styles.girlie} src={girl} alt="girl"/>
     </div>
     <div className={Styles.waves_container}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="currentColor" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,245.3C480,267,600,213,720,181.3C840,149,960,139,1080,160C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
 </svg>
     </div>
    </div>
  </>
  )
}

export default Home;