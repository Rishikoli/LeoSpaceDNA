import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PlanetModel from './components/Planetmodel'; // Fixed import casing
import Navbar from './components/Navbar';
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page */}
          <Route path="/solar-system" element={<SolarSystem />} /> 
          <Route path="/space" element={<PlanetModel />} />  {/* Welcome page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
