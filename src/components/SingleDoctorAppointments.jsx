import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/hospitalData.json";
import "./SingleDoctorAppointments.scss";
import Calander from "./Calander";

const SingleDoctorAppointments = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState("week"); // "day" or "week"
  const [currentTime, setCurrentTime] = useState(new Date());

  // Find doctor from JSON by URL param

  const decodedName = decodeURIComponent(name);
  console.log(decodedName)

  const doctor = data.doctors.find(
    (doc) => doc.name.toLowerCase() === decodedName.toLowerCase()
  );

  // Update current time every minute (for the red line)
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!doctor) return <p>Doctor not found 😢</p>;

  // Time slots
  const timeSlots = [];
  for (let h = 8; h <= 18; h++) {
    timeSlots.push(`${h}:00`);
  }

  // Calculate current time position for the red line (in percentage)
  const getTimePosition = () => {
    const totalMinutes = (18 - 8) * 60;
    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes() - 8 * 60;
    return (nowMinutes / totalMinutes) * 100;
  };

  return (
    <div className="doctor-appointments">
      <div className="doctor-header">
        <div className="doctor-info-card">
          <div className="doctor-avatar">
            <img
              src={doctor.image || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"}
              alt={doctor.name}
            />
          </div>
          <div className="doctor-details">
            <h2>{doctor.name}</h2>
            <div className="specialty">{doctor.specialty}</div>
            <div className="working-hours">
              <strong>Working Hours:</strong> {doctor.workingHours}
            </div>
            <div className="contact-info">
              <span><strong>Email:</strong> {doctor.email || "doctor@hospital.com"}</span>
              <span><strong>Phone:</strong> {doctor.phone || "+91 98765 43210"}</span>
            </div>
            <div className="appointments-summary">
              <span>Total Appointments: {doctor.appointments.length}</span>
              <span>Next Patient: {doctor.appointments[0]?.patientName || "N/A"}</span>
            </div>
            <button className="back-btn" onClick={() => navigate("/")}>
              ← Back to Dashboard
            </button>
          </div>
        </div>


      </div>
      {console.log(doctor.name,"doctor")}
      <Calander DctrName={doctor.name} appointments= {doctor.appointments} />




    </div>
  );
};

export default SingleDoctorAppointments;
