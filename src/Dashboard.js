import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import Header from "./Header";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
