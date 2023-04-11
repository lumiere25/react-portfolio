import React, { useState } from "react";
import './App.css';
// import "./LandingPage/Home.module.css";
// import Spinner from "./components/loadingSpinner/Spinner";
import Header from "./components/navigation/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Wave from "./components/wave/Wave";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";


function App() {

  // const [ isLoading, setIsLoading ] = useState(false);

  // if(setIsLoading) {
  //   content = <Spinner />
  // }
  

  return (
    <div className="App">
     <Header/>
     <Wave/>
     <Footer/>
     <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
