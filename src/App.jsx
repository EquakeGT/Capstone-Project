import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Technician from "./technician.jsx";
import ProgressReport from "./progressreport.jsx";
import ViewPastMaintenance from "./view-past-maintenance.jsx";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Technician />} />
        <Route path="/view-past-maintenance" element={<ViewPastMaintenance />} />
        <Route path="/create-progress-report/:machineId" element={<ProgressReport />} />
      </Routes>
    </Router>
  );
};

export default App;
