import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">🏥 MedEase</h1>
      <ul className="navbar__links">
        <li>Dashboard</li>
        <li>Appointments</li>
        <li>Doctors</li>
        <li>Patients</li>
      </ul>
    </nav>
  );
};

export default Navbar;
