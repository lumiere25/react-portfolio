import { useState } from "react";
import Styles from "../components/SignUp/SignUp.module.css";
import ContactFormMessaging from "../components/form/ContactFormMessaging";
import SignInfo from "../components/SignUp/SignInfo";
import Kid from "../components/img/kid.jpg";
// import SignInfo from "../components/SignUp/SignInfo";



const CatalogForm = () => {
  // const { isLoggedIn, } = useContext(AuthContext); 

const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ selectedService, setSelectedService ] = useState("");
const [ isSubmitted, setIsSubmitted ] = useState(false);
const [ isSuccess, setIsSuccess ] = useState(true);
const [ isValid, setIsValid ] = useState(false);
const [ message, setMessage ] = useState("");



function validateForm() {
  const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/
  if(!email.match(emailRegex) || name.length < 5 || email.length < 3) {
    setIsValid(false);
} else setIsValid(true);
}

const options = [
  "Daily Catalog",
  "Weekly Catalog",
  "Monthly Catalog",
];





  return (
 <>
 <div className={Styles.kid_image}>
 <img className={Styles.kiddy} src={Kid} alt="kid" />
 </div>
  <form className={Styles.signup_container}>
   <SignInfo/>
    <div className={Styles.signup_content}>
      <label className={Styles.form_label_one}>
      <div className={Styles.text_name}>
       Name
       </div>
      <input className={Styles.input_name} type="text" placeholder="First Name" onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={Styles.form_label_two}>
      <div className={Styles.text_email}>
       Email
       </div>
       <input className={Styles.input_email} type="text" placeholder="Your Email" onChange={(e) => {
         setEmail(e.target.value);
       }}
       />
      </label>
      
      <label className={Styles.form_label_three}>
      <div className={Styles.text_password}>
       Password:
       </div>
      <input className={Styles.input_password} type="text" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label className={Styles.form_label_four}>
      <div className={Styles.text_password}>
       Reconfirm Password:
       </div>
       <input  className={Styles.input_password} type="text" placeholder="Reconfirm your Password..." onChange={(e) => {
         setPassword(e.target.value);
       }}
       />
      </label>



      <label>
      <div className={Styles.text_info}>
      Please select which catalog you like:
      </div>
      <select className={Styles.select}
      value={selectedService} 
      onChange={(e)  => 
    setSelectedService(e.target.value)}
      >
         <option disabled={true} value="">
         --Choose an Option--
         </option>
        <option value="Daily Catalog">Daily Catalog</option>
        <option value="Weekly Catalog">Weekly Catalog</option>
        <option value="Monthly Catalog">Monthly Catalog</option>
        {options.map((option, id) => (
          <option value={option} key= {`${id} - ${option}`}>
           {option}
          </option>
          ))};
      </select>
   </label>
   <label>
   <div className={Styles.message}>
   Message
   </div>
   </label>
   <textarea className={Styles.text_info_message} placeholder="Enter your Message"
    name="Message"
    cols="40"
    rows="5"
    onChange={(e) => setMessage(e.target.value)} 
   ></textarea>
   <button className={Styles["submit-button"]}

   type="button"
   onClick={() => {
     validateForm()
     setIsSubmitted(true)}}>
   <div className={Styles.submit_text}>
   Submit
   </div>
   </button>  
   </div>  

 
 
 
  


 {
  isSubmitted && isSuccess && isValid && (<ContactFormMessaging isError={false} content="Thank you for your submission!, we'll be in touch with you shortly" />)
}

{
  isSubmitted && !isSuccess && (<ContactFormMessaging isError content="Whoops! Something went wrong, please try again later" />)
}

{
  !isSubmitted && !isValid && (<ContactFormMessaging isError content="Please fill in the form" />)
}

</form>
</>
  )
}

export default CatalogForm;