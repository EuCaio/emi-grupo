import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon">
          <i className="user-icon"></i>
        </div>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="email" placeholder="Confirmar Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Registrar</button>
        </form>
        <Link to="/login" className="back-btn">
          &#8592; Voltar para Login
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;
