import React from "react";
import { useUserRole } from "../context/UserRoleContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const { role, toggleRole } = useUserRole();
  const navigate = useNavigate();

  const handleToggle = () => {
    toggleRole();
    // Optional: redirect when switching roles
    if (role === "frontdesk") {
      navigate("/doctor/Dr-Sarah-Chen"); // Example doctor
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <h2>🏥 Hospital Scheduler</h2>
      <div className="role-toggle">
        <span>
          Current Role: <strong>{role.toUpperCase()}</strong>
        </span>
        <button onClick={handleToggle}>
          Switch to {role === "frontdesk" ? "Doctor" : "Frontdesk"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
