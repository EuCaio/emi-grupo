import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Geasy from './Geasy';
import Login from './Login';
import Cadastro from './Cadastro';
import Dashboard from './Dashboard';

function RedirectToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para "/" ao carregar a aplicação
    navigate('/');
  }, [navigate]);

  return null; // Este componente não renderiza nada, apenas redireciona
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecionamento automático */}
        <Route path="/" element={<Geasy />} />

        {/* Rotas do sistema */}
        <Route path="/" element={<Geasy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rota 404 */}
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
