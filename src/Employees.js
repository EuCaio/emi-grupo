import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Employees.css";

const initialEmployeeData = [
  {
    id: 1,
    name: "Caio Marques",
    role: "Desenvolvedor Full Stack",
    email: "caio@empresa.com",
  },
  {
    id: 2,
    name: "Yuri Ferraz",
    role: "Desenvolvedor Full Stack",
    email: "yuri@empresa.com",
  },
  {
    id: 3,
    name: "Eduardo Felipe",
    role: "Desenvolvedor Full Stack",
    email: "eduardo@empresa.com",
  },
  {
    id: 4,
    name: "Ruan Abreu",
    role: "Desenvolvedor Full Stack",
    email: "ruan@empresa.com",
  },
  {
    id: 5,
    name: "Lucas Valença",
    role: "Desenvolvedor Full Stack",
    email: "lucas@empresa.com",
  },
];

function Employees({ userRole }) {
  const [employees, setEmployees] = useState(initialEmployeeData);
  const navigate = useNavigate();

  const handleEmployeeClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const handleRemoveEmployee = (e, id) => {
    e.stopPropagation(); // impede que o clique remova e também navegue
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="employees-container">
        <h1>Lista de Funcionários</h1>
        <ul className="employees-list">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="employee-item"
              onClick={() => handleEmployeeClick(employee.id)}
            >
              <div className="employee-info">
                <p><strong>Nome:</strong> {employee.name}</p>
                <p><strong>Cargo:</strong> {employee.role}</p>
              </div>
              {userRole === "gerente" && (
              <button
                className="remove-button"
                onClick={(e) => handleRemoveEmployee(e, employee.id)}
              >
                ✕
              </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Employees;
