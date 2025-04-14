import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(true); // Sidebar aberta automaticamente em telas grandes
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <div
        className={`sidebar ${isOpen ? "open" : ""} ${isMobile && isOpen ? "fullscreen" : ""}`}
      >
        <nav className="sidebar-menu">
          <ul>
            <li>
              <Link to="/dashboard" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/employees" onClick={handleLinkClick}>
                Funcionários
              </Link>
            </li>
            <li>
              <Link to="/notifications" onClick={handleLinkClick}>
                Notificações
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
