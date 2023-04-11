import Styles from "./wave.module.css";
const Wave = () => {
  return (
    <>
    <div className={Styles.waves_container}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
 <path fill="currentColor" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,245.3C480,267,600,213,720,181.3C840,149,960,139,1080,160C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
    </div>
    </>
  )
}

export default Wave;