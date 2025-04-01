import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        className="menu-button"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-label="Abrir ou fechar o menu lateral"
      >
        ☰
      </button>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link> {/* Agora leva ao Dashboard */}
          </li>
          <li>
            <Link to="/employees">Funcionários</Link> {/* Agora leva à página de funcionários */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
