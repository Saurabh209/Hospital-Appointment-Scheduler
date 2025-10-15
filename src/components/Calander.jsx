import React, { useState, useMemo } from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import doctorData from "../data/hospitalData.json";
import "./Calander.scss";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const CalendarPage = ({ DctrName,appointments }) => {
  const doctor = doctorData.doctors.find(
    (d) => d.name.toLowerCase() === DctrName.toLowerCase()
  );

  const events = useMemo(() => {
    if (!doctor) return [];
    return appointments.map((apt) => ({
      title: `${apt.patientName} - ${apt.type}`,
      start: new Date(apt.startTime),
      end: new Date(apt.endTime),
      color:
        apt.type === "Checkup"
          ? "#3b82f6"
          : apt.type === "Consultation"
          ? "#10b981"
          : apt.type === "Follow-up"
          ? "#f59e0b"
          : "#8b5cf6"
    }));
  }, [doctor]);

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color,
      color: "white",
      borderRadius: "5px",
      border: "none",
      padding: "4px 6px",
      fontSize: "0.9rem",
      fontWeight: 500
    }
  });

  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date()); // controls current displayed date
  const currentTime = new Date();
  const minTime = new Date(); minTime.setHours(8, 0, 0);
  const maxTime = new Date(); maxTime.setHours(18, 0, 0);

  // Back/Next buttons
  const handlePrev = () => {
    const newDate = view === Views.DAY ? new Date(date.setDate(date.getDate() - 1)) : new Date(date.setDate(date.getDate() - 7));
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = view === Views.DAY ? new Date(date.setDate(date.getDate() + 1)) : new Date(date.setDate(date.getDate() + 7));
    setDate(newDate);
  };

  return (
    <div className="calendar-page">
      <div className="header">
        <h2>{doctor?.name} - {doctor?.specialty}</h2>
        {/* <div className="view-buttons">
          <button onClick={() => setView(Views.DAY)}>Day</button>
          <button onClick={() => setView(Views.WEEK)}>Week</button>
        </div> */}
      </div>

      {/* Back/Next buttons */}
      {/* <div className="nav-buttons">
        <button onClick={handlePrev}>← Previous</button>
        <button onClick={handleNext}>Next →</button>
      </div> */}

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        view={view}
        date={date}  // controlled current date
        onView={setView}
        onNavigate={setDate} // needed for navigation
        eventPropGetter={eventStyleGetter}
        step={30}
        timeslots={2}
        min={minTime}
        max={maxTime}
        views={{ day: true, week: true }} // only allow day & week
        components={{
          timeSlotWrapper: ({ children, value }) => {
            const isPast = value < currentTime;
            return (
              <div style={{ backgroundColor: isPast ? "rgba(0,0,0,0.03)" : "transparent" }}>
                {children}
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default CalendarPage;
