import React from "react";
import styles from "./ContactUs.module.css";

function ContactUs  ()  {
  return (
    <>
  <div className={styles.contactus_container_2}>
    <p>Got a question? Contact us below!</p>
      </div>
      <div className={styles.contactus_container}>
      <h1 className={styles.contact_heading}>Contact Us</h1>

      <div className={styles.contact_infos}>
     <p>We look forward to hearing from you.</p>
    <p>Email:<a href="mailto: kindysteps@gmail.org">kindysteps@gmail.org</a></p>
    <p>Phone:<a href="tel: 0457 954 232">0457 954 232</a></p>
    </div>
  
  <p>Alternatively, fill the form and we will get back to you as soon as possible.</p>

  </div>
</>

  )
}

export default ContactUs;