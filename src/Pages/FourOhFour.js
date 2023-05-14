import React from 'react'
import styles from "../components/notFound/notFound.module.css";




const FourOhFour = () => {
 
  return (
    <>
    <div className={styles.notFound_container}>
   <h1>404! Page Not Found!</h1>  
   <p>"Please try a different page "</p>
   </div>
  
</>
  )
}

export default FourOhFour;