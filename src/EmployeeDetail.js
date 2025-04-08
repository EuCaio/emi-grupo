import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./EmployeeDetail.css";

const employeeData = [
  {
    id: 1,
    name: "Caio Marques",
    role: "Desenvolvedor Full Stack",
    email: "caio@empresa.com",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "5 horas",
    attest: "1 atestado",
    vocation: "15 dias",
    absence: "2 faltas",
    payment: "R$ 6.000,00",
  },
  {
    id: 2,
    name: "Yuri Ferraz",
    role: "Desenvolvedor Full Stack",
    email: "yuri@empresa.com",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "2 horas",
    attest: "0 atestados",
    vocation: "20 dias",
    absence: "0 faltas",
    payment: "R$ 5.500,00",
  },
  {
    id: 3,
    name: "Eduardo Felipe",
    role: "Desenvolvedor Full Stack",
    email: "eduardo@empresa.com",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "3 horas",
    attest: "2 atestados",
    vocation: "10 dias",
    absence: "1 falta",
    payment: "R$ 5.800,00",
  },
  {
    id: 4,
    name: "Ruan Abreu",
    role: "Desenvolvedor Full Stack",
    email: "ruan@empresa.com",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "6 horas",
    attest: "1 atestado",
    vocation: "15 dias",
    absence: "3 faltas",
    payment: "R$ 6.200,00",
  },
  {
    id: 5,
    name: "Lucas Valença",
    role: "Desenvolvedor Full Stack",
    email: "lucas@empresa.com",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "4 horas",
    attest: "0 atestados",
    vocation: "18 dias",
    absence: "0 faltas",
    payment: "R$ 5.900,00",
  },
];

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employeeData.find((emp) => emp.id === parseInt(id));

  const [messages, setMessages] = useState([
    { from: "funcionario", text: "Olá" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "usuario", text: input }]);
      setInput("");
    }
  };

  if (!employee) return <div>Funcionário não encontrado.</div>;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="employee-detail">
        <button className="back-btn" onClick={() => navigate("/employees")}>
          ← Voltar
        </button>
        <h2>{employee.name}</h2>

        <div className="employee-content">
          <div className="employee-info">
            <p><strong>Cargo:</strong> {employee.role}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Dias de Trabalho:</strong> {employee.workday}</p>
            <p><strong>Folga:</strong> {employee.dayoff}</p>
            <p><strong>Horas Extras:</strong> {employee.overtime}</p>
            <p><strong>Atestado:</strong> {employee.attest}</p>
            <p><strong>Férias:</strong> {employee.vocation}</p>
            <p><strong>Faltas:</strong> {employee.absence}</p>
            <p><strong>Salário:</strong> {employee.payment}</p>
          </div>

          <div className="chat-box">
            <h3>Chat com {employee.name}</h3>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
