import React, { useState } from "react";
import Style from  './App.css';

// import "./LandingPage/Home.module.css";
// import Spinner from "./components/loadingSpinner/Spinner";
import Header from "./components/navigation/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import FourOhFour from "./Pages/FourOhFour";

import Wave from "./components/wave/Wave";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";





function App() {

  const toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
  // const [ isLoading, setIsLoading ] = useState(false);

  // if(setIsLoading) {
  //   content = <Spinner />
  // }
  

  return (
    <>
    <div className="App">
     <Header/>
     <Wave/>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/signup" element={<SignUp />} />
     <Route path="/*" element={<FourOhFour />} />
  </Routes> 
      <div>
      <button onClick={toTop} id="scroll_button">Scroll To Top</button>
      </div>
      <Footer/>
  </div>

  </>
  );
}

export default App;
