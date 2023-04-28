import React from 'react'
import Styles from "../components/Home.module.css";
import Style from "../components/Services/services.module.css";
import Services from "../components/Services/services";
import ServiceDescription from '../components/Services/serviceDescription';
import { Link } from "react-router-dom";
import woman from "../components/img/woman.png";
import desk from "../components/img/desk2.png";
import eclipse from "../components/img/Ellipse.png";
import newEclipse from "../components/img/Ellipsered.png";
import AddressBook from "../components/img/addressbook.png";
import Clock from "../components/img/clock.png";
import Envelope from "../components/img/envelope.png";
import Bell from "../components/img/notification.png";
import girl from "../components/img/girl.png";
import girl2 from "../components/img/girl2.png";
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
      <div className={Styles.desk_img}>
      <img className={Styles.desk}src={desk} alt=""/>
      </div>
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

     <div className={Styles.wrapper}>
     <ServiceDescription 
     desc="Our Services That We Offer To You"
     />   
     </div>
    
     <div className={Style.services_container}>
     <Services 
     img={Envelope}
     description="Got questions? Mail us!"
     
     />
     <Services 
     img={Clock}
     description="We are open 5 days a week from 9:am to 7:30pm"
     
     />
     <Services 
     img={AddressBook}
     description="Write us a query!"
     
     />
     <Services 
     img={Bell}
     description="Sign up and get weekly updates"
     
     />
     </div>
    </div>
  </>
  )
}

export default Home;