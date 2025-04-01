import React from "react";
import "./Calendar.css"; // Arquivo de estilização


function Calendar() {
  return (
    <div className="calendar-container">
      <h1 className="emi-title">Aproveite o E.M.I</h1>
      <h1 className="calendar-title">Calendário</h1>
      <div className="calendar-frame">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=pt-br.brazilian%23holiday%40group.v.calendar.google.com"
          style={{ border: 0, width: "400px", height: "400px" }}
          frameBorder="0"
          scrolling="no"
          title="Calendário do Google"
        ></iframe>
      </div>
    </div>
  );
}

export default Calendar;
