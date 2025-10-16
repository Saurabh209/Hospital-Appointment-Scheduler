import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FrontDeskDashboard.scss";
import doctorData from '../data/hospitalData.json'


const FrontDeskDashboard = () => {
  const [dateTime, setDateTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Url Space remover
 const createSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};
 
  console.log(doctorData?.doctors)
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
        {doctorData?.doctors?.map((doc, index) => (
          <Link
            to={`/doctor/${createSlug(doc.name)}`}
            key={index}
            className="doctor-card"
          >
            <img src={doc.image} alt={doc.name} className="doctor-card__image" />
            <h3 className="doctor-card__name">{doc.name}</h3>
            <p className="doctor-card__specialty">{doc.specialty}</p>
            {/* <p className="doctor-card__exp">{doc.experience} experience</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FrontDeskDashboard;
