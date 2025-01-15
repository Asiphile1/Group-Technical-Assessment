
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginScreen from "./components/pages/LoginScreen";
import WeatherScreen from "./components/pages/WeatherScreen";
import ActivitiesScreen from "./components/pages/ActivitiesScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/activities" element={<ActivitiesScreen />} />
      </Routes>
    </Router>
import React from 'react';
import Homepage from './components/Homepage';
import Destiny from './components/Destiny'; // Import the new Destiny component

const App = () => {
  return (
    <div>
      <Homepage />
      <Destiny /> {/* Add the Destiny component here */}
    </div>

  );
};

export default App;
