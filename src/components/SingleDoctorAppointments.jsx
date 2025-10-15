import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleDoctorAppointments.scss";

const SingleDoctorAppointments = () => {
  const { name } = useParams();
  const [view, setView] = useState("week"); // "day" or "week"

  const doctorData = {
    name: decodeURIComponent(name),
    specialty: "Cardiologist",
    experience: "10 years",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  };

  const appointments = [
    { day: "Monday", time: "10:00", patient: "Aman Sharma" },
    { day: "Monday", time: "14:00", patient: "Riya Das" },
    { day: "Tuesday", time: "11:00", patient: "Rahul Mehta" },
    { day: "Wednesday", time: "09:00", patient: "Kunal Singh" },
    { day: "Friday", time: "16:00", patient: "Meera Joshi" },
  ];

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`); // 8AM - 8PM

  const getAppointment = (day, time) =>
    appointments.find((a) => a.day === day && a.time === time);

  return (
    <div className="doctor-page">
      {/* Doctor Info Card */}
      <div className="doctor-profile">
        <div className="doctor-info">
          <img src={doctorData.image} alt={doctorData.name} />
          <div className="doctor-details">
            <h2>{doctorData.name}</h2>
            <p>{doctorData.specialty}</p>
            <p>Experience: {doctorData.experience}</p>
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/" className="back-btn">
            ← Back to Dashboard
          </Link>
          <button className="add-btn">+ Add Appointment</button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="view-toggle">
        <button
          className={view === "day" ? "active" : ""}
          onClick={() => setView("day")}
        >
          Day View
        </button>
        <button
          className={view === "week" ? "active" : ""}
          onClick={() => setView("week")}
        >
          Week View
        </button>
      </div>

      {/* Schedule Table */}
      <div className="schedule-container">
        {view === "week" ? (
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="time-slot">{time}</td>
                  {daysOfWeek.map((day) => {
                    const appointment = getAppointment(day, time);
                    return (
                      <td key={day + time}>
                        {appointment ? (
                          <div className="appointment">
                            <strong>{appointment.patient}</strong>
                            <p>{appointment.time}</p>
                          </div>
                        ) : (
                          <div className="empty-slot">—</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="schedule-table day-view">
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => {
                const appointment = appointments.find((a) => a.day === "Monday" && a.time === time);
                return (
                  <tr key={time}>
                    <td>{time}</td>
                    <td>
                      {appointment ? (
                        <strong>{appointment.patient}</strong>
                      ) : (
                        <span className="empty-slot">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SingleDoctorAppointments;
