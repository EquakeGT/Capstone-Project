import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Technician from "./technician.jsx";
import ProgressReport from "./progressreport.jsx";



const Home = () => {
  const navigate = useNavigate();
  
  const technicianbutton = () => {
    navigate("/technician");
  };

  return (
    <div className="content-container">
      <div className="hero-section">
        <h1>Predictive maintenance system for milling machines</h1>
        <p>Created by ....</p>
        <button onClick={technicianbutton}>Technician (for now)</button>
      </div>

      <div>
        <h2>What We Offer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
      </div>
    </div>
  );
};


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
        
            <Router>
              <Navbar toggle={toggle} />
              <Sidebar isopen={isOpen} toggle={toggle} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/technician" element={<Technician />} />
                <Route path="/create-progress-report/:machineId" element={<ProgressReport />} />
              </Routes>
  
            </Router>
        
    </div>
  );
};

export default App;