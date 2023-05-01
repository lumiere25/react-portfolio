import React from "react";
import Styles from "./Footer.module.css";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";

const Footer = () => {
  return (
   <div className={Styles.footer_container}>
   <div className={Styles.social}>
   <img src={facebook} className={Styles.facebook} alt="facebook"/>
   <img src={instagram} className={Styles.instagram} alt="instagram"/>
   <img src={twitter} className={Styles.twitter} alt="twitter"/>
</div>
<div className={Styles.footer_content}>
  <h4>Call us on: 0457 884 776 </h4>
  <h5>Terms and Conditions | Privacy Policy </h5>
  <span>&copy; | Chrissa Hanna 2023</span>
  </div>
</div>
  )
}

export default Footer;