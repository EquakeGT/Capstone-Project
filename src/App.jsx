import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Technician from "./technician.jsx";
import ProgressReport from "./progressreport.jsx";
import ViewPastMaintenance from "./view-past-maintenance.jsx";



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
          {/* Change the default route to render Technician */}
          <Route path="/" element={<Technician />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technician" element={<Technician />} />
          <Route path="/create-progress-report/:machineId" element={<ProgressReport />} />
          <Route path="/view-past-maintenance" element={<ViewPastMaintenance />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
