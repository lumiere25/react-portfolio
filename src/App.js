import './App.css';
// import "./LandingPage/Home.module.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./components/navigation/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
