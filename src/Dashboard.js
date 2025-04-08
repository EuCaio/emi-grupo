import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import "./Dashboard.css"; 



function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
