import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FrontDeskDashboard.scss";

const FrontDeskDashboard = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const doctors = [
    {
      name: "Dr. Asha Patel",
      specialty: "Cardiologist",
      experience: "10 years",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic",
      experience: "7 years",
      image: "https://cdn-icons-png.flaticon.com/512/921/921124.png",
    },
    {
      name: "Dr. Neha Sharma",
      specialty: "Dermatologist",
      experience: "5 years",
      image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="staff-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="Staff"
            className="staff-info__image"
          />
          <div>
            <h2 className="staff-info__name">Saurabh Kumar</h2>
            <p className="staff-info__role">Front Desk Executive</p>
          </div>
        </div>

        <div className="datetime">
          <p className="datetime__date">
            {dateTime.toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="datetime__time">{dateTime.toLocaleTimeString()}</p>
        </div>
      </div>

      <h2 className="dashboard__title">Available Doctors</h2>
      <div className="dashboard__cards">
        {doctors.map((doc, index) => (
          <Link
            to={`/doctor/${encodeURIComponent(doc.name)}`}
            key={index}
            className="doctor-card"
          >
            <img src={doc.image} alt={doc.name} className="doctor-card__image" />
            <h3 className="doctor-card__name">{doc.name}</h3>
            <p className="doctor-card__specialty">{doc.specialty}</p>
            <p className="doctor-card__exp">{doc.experience} experience</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FrontDeskDashboard;
