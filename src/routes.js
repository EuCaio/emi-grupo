import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginGerente from "./LoginGerente";
import LoginFuncionario from "./LoginFuncionario";
import Employees from "./Employees";
import EmployeeDetail from "./EmployeeDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginGerente />} />
      <Route path="/login-funcionario" element={<LoginFuncionario />} />
      <Route path="/employees" element={<Employees isManager={true} />} />
      <Route path="/employees/:id" element={<EmployeeDetail isManager={true} />} />
      <Route path="/funcionario/employee" element={<Employees isManager={false} />} />
      <Route path="/funcionario/employee/:id" element={<EmployeeDetail isManager={false} />} />
    </Routes>
  );
}

export default AppRoutes;