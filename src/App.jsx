import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import Navbar from "./components/Navbar";
import FrontDeskDashboard from "./components/FrontDeskDashboard";
import SingleDoctorAppointments from "./components/SingleDoctorAppointments";
import Footer from "./components/Footer";
import { useUserRole } from "./context/UserRoleContext";
import "./App.scss";

const App = () => {
  const { role } = useUserRole();
  const navigate = useNavigate(); // ✅ define navigate hook

  useEffect(() => {
    if (role === "frontdesk") {
      navigate("/"); // go to dashboard
    } else {
      navigate("/doctor/Dr. John Smith"); // example default doctor
    }
  }, [role ]); // include navigate in dependencies

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontDeskDashboard />} />
        <Route path="/doctor/:name" element={<SingleDoctorAppointments currentRole={role} />} />
        <Route path="/Dr. John Smith" element={<SingleDoctorAppointments currentRole={role} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
