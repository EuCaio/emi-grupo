import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Cad from './cad'; 
import Dashboard from './Dashboard'; 
import Geasy from './Geasy';
import Employees from "./Employees";
import EmployeeDetail from "./EmployeeDetail";

function Login({ setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "gerente@empresa.com" && password === "1234") {
      setUserRole("gerente");
      navigate("/dashboard");
    } else if (email === "funcionario@empresa.com" && password === "1234") {
      setUserRole("funcionario");
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas");
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
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Geasy />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/cadastro" element={<Cad />} />
        <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
        <Route path="/employees" element={<Employees userRole={userRole} />} />
        <Route path="/employees/:id" element={<EmployeeDetail userRole={userRole} />} />
      </Routes>
    </Router>
  );
}

export default App;
