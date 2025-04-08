import React from "react";
import { Link } from "react-router-dom"; // Importação para navegação
import Sidebar from "./Sidebar";
import "./Employees.css"; // Estilo da lista

function Employees() {
  const employees = [
    { id: 1, name: "Caio Marques", role: "Desenvolvedor Full Stack" },
    { id: 2, name: "Yuri Ferraz", role: "Desenvolvedor Full Stack" },
    { id: 3, name: "Eduardo Felipe", role: "Desenvolvedor Full Stack" },
    { id: 4, name: "Ruan Abreu", role: "Desenvolvedor Full Stack" },
    { id: 5, name: "Lucas Valença", role: "Desenvolvedor Full Stack" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className="employees-container">
          <h1>Lista de Funcionários</h1>
          <ul className="employees-list">
            {employees.map((employee) => (
              <li key={employee.id} className="employee-item">
                <Link to={`/employees/${employee.id}`}>
                  <strong>{employee.name}</strong> - {employee.role}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Employees;
