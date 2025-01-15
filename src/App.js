import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginScreen from "./components/pages/LoginScreen";
import WeatherScreen from "./components/pages/WeatherScreen";
import ActivitiesScreen from "./components/pages/ActivitiesScreen";
import Destiny from "./components/Destiny"; // Import the Destiny component


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/activities" element={<ActivitiesScreen />} />

          
        <Route path="/destiny" element={<Destiny />} /> {/* Add the Destiny route */}

      </Routes>
    </Router>
  );
};

export default App;
