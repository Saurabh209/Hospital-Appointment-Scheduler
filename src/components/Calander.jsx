import React, { useState, useMemo } from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calander.scss";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

// Custom Event Component
const EventComponent = ({ event }) => {
  const duration = (new Date(event.end) - new Date(event.start)) / 60000;
  return (
    <div
      className="custom-event"
      style={{
        backgroundColor: event.color,
        padding: "4px",
        borderRadius: "8px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60px",
        fontSize: "0.9rem",
        fontWeight: 500,
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <strong>{event.patientName}</strong>
      <span>{event.type}</span>
      <span>Duration: {duration} mins</span>
    </div>
  );
};

const CalendarPage = ({ DctrName, appointments }) => {
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());

  const currentTime = new Date();
  const minTime = new Date(); minTime.setHours(8, 0, 0);
  const maxTime = new Date(); maxTime.setHours(18, 0, 0);

  // Prepare events
  const events = useMemo(() => {
    if (!appointments) return [];
    return appointments.map((apt) => ({
      patientName: apt.patientName,
      type: apt.type,
      start: new Date(apt.startTime),
      end: new Date(apt.endTime),
      color:
        apt.type === "Checkup"
          ? "#3b82f6"
          : apt.type === "Consultation"
          ? "#10b981"
          : apt.type === "Follow-up"
          ? "#f59e0b"
          : "#8b5cf6",
    }));
  }, [appointments]);

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color,
      color: "#fff",
      border: "none",
      padding: "4px 6px",
      borderRadius: "8px",
    },
  });

  return (
    <div className="calendar-page">
      <div className="header">
        <h2>{DctrName}</h2>
        <div className="view-buttons">
          <button
            className={view === Views.DAY ? "active" : ""}
            onClick={() => setView(Views.DAY)}
          >
            Day
          </button>
          <button
            className={view === Views.WEEK ? "active" : ""}
            onClick={() => setView(Views.WEEK)}
          >
            Week
          </button>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        view={view}
        date={date}
        onView={setView}
        onNavigate={setDate}
        step={30}
        timeslots={2}
        min={minTime}
        max={maxTime}
        views={{ day: true, week: true }}
        components={{
          event: EventComponent,
          timeSlotWrapper: ({ children, value }) => {
            const isPast = value < currentTime;
            return (
              <div style={{ backgroundColor: isPast ? "rgba(0,0,0,0.03)" : "transparent" }}>
                {children}
              </div>
            );
          },
        }}
        eventPropGetter={eventStyleGetter}
        formats={{
          eventTimeRangeFormat: () => "", // hide default times
        }}
      />
    </div>
  );
};

export default CalendarPage;
