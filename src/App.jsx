import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FrontDeskDashboard from "./components/FrontDeskDashboard";
import SingleDoctorAppointments from "./components/SingleDoctorAppointments";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontDeskDashboard />} />
          <Route path="/doctor/:name" element={<SingleDoctorAppointments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
