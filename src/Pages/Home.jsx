import React from 'react'
import Styles from "../components/Home.module.css";
import Services from "../components/Services/services";
import { Link } from "react-router-dom";
import woman from "../components/img/woman.png";
import eclipse from "../components/img/Ellipse.png";
import newEclipse from "../components/img/Ellipsered.png";
import girl from "../components/img/girl.png";
import girl2 from "../components/img/girl2.png";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Card from "../components/Cards/cards";


const Home = () => {

 
  <Card />
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
  { /* blogs section */ }

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


     { /* Website Description */}
     <div className={Styles.desc_container}>
     <div className={Styles.desc_left}>
      <h1>We love having fun</h1>
     <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio accusamus iusto facilis voluptas harum natus, a nulla, reprehenderit alias minima ab assumenda iste ea eius unde totam quia. Fuga quae, voluptas corrupti veritatis maiores, ratione dolores nam dicta asperiores consectetur alias labore quam ab debi</span>
      </div>
      <div className={Styles.desc2_container}>
      <div className={Styles.desc_right}>
     <h1>Delight the little ones</h1>
    <span>We do the building for you, while you take advantage of your downtime we will do the work!
    Your child will be kept entertained with our interactive play centre, designed to target your child's developmental needs, honing on and expanding their motor skills, targeting the mind through imaginative play and learning social skills! </span>
       </div>
       <div className={Styles.desc2_left_container}>
        <img src={girl2} alt="girly"/>
         </div>
       </div>
      </div>
      <div className={Styles.mail_us_container}>
      <div className={Styles.mail_us} >
       <h2>Contact Us Today:</h2>
       <Link to="/contact">
       <button className={Styles.btn_contact}>Visit our Contact Page</button>
       </Link>
      </div>
     </div>

     <div className={Styles.services_section}>
     <Services 
     icon={faEnvelope}
     description="lorem ipsum pipsum plum flut scit jada lada cada bing boom"
     
     />
     <Services 
     icon={faClock}
     description="lorem ipsum pipsum plum flut scit jada lada cada bing boom"
     
     />
     <Services 
     icon={faAddressBook}
     description="lorem ipsum pipsum plum flut scit jada lada cada bing boom"
     
     />
     <Services 
     icon={faBell}
     description="lorem ipsum pipsum plum flut scit jada lada cada bing boom"
     
     />
     </div>
    </div>
  </>
  )
}

export default Home;