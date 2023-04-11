 import react from "react";
 import Styles from "./cards.module.css";

 const Card = () => {
   return (
     <>
    <div className={Styles.cards_container}>
    
    <div className={Styles.cards}>
    <h4>Test</h4>
    </div>
    <div className={Styles.cards}>
    <h4>Test</h4>
    </div>
    <div className={Styles.cards}>
    <h4>Test</h4>
  </div>
  </div>

    </>
   )
 }

 export default Card;