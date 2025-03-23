import React from 'react';
import './App.css';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="menu-bar">
        <nav>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#calendar">Pagamentos</a></li>
            <li><a href="#settings">Documentos</a></li>
            <li><a href="#logout">Funcionários</a></li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-content">
        <h1>Bem-vindo a E.M.I!</h1>
        <div className="calendar-container">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id" 
            className="calendar" 
            title="Calendário"
          ></iframe>
        </div>
      </main>
      <div className="chat-container">
        <button className="chat-button">
          💬
        </button>
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat com o Bot</span>
          </div>
          <div className="chat-messages">
            <p>Olá! Como posso te ajudar?</p>
          </div>
          <input type="text" placeholder="Escreva aqui..." />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
