import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Cad from './cad'; 
import Dashboard from './Dashboard'; 
import Geasy from './Geasy';
import Employees from "./Employees";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon">
          <i className="user-icon"></i>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button type="submit">Entrar</button>
          <button
            type="button"
            className="register-btn"
            onClick={() => navigate('/cadastro')}
          >
            Registrar-se          
          </button>            
          <div className="options">
            <label>
              <input type="checkbox" />Lembre de mim
            </label>
          </div>
          <a className="lembre" href="/">Esqueci a Senha?</a>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Geasy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cad />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}

export default App;
