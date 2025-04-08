import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/employees">Funcionários</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
