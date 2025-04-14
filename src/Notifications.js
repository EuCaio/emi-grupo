import React from "react";
import Sidebar from "./Sidebar";
import './Notifications.css';
import "./Dashboard.css";

function Notifications() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
        <div className="dashboard-content-notification">
          <h2>Notificações</h2>
          <ul className="notifications-list">
            <li>Nova Menssagem!</li>
          </ul>
        </div>
      </div>
  );
}

export default Notifications;
