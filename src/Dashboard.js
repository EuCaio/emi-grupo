import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import Header from "./Header";
import "./Dashboard.css";

function Dashboard({ userRole }) {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header userRole={userRole} />
        <div className="dashboard-content">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
