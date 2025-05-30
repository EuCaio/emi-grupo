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
    hiring: "02/06/2022",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "5 horas",
    regulation: "CLT",
    attest: "1 atestado",
    workload: "30 horas semanais",
    vocation: "15 dias",
    absence: "2 faltas",
    payment: "R$ 6.000,00",
  },
  {
    id: 2,
    name: "Yuri Ferraz",
    role: "Desenvolvedor Full Stack",
    email: "yuri@empresa.com",
    hiring: "22/05/2020",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "2 horas",
    regulation: "CLT",
    attest: "0 atestados",
    workload: "34 horas semanais",
    vocation: "20 dias",
    absence: "0 faltas",
    payment: "R$ 5.500,00",
  },
  {
    id: 3,
    name: "Eduardo Felipe",
    role: "Desenvolvedor Full Stack",
    email: "eduardo@empresa.com",
    hiring: "08/02/2024",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "3 horas",
    regulation: "CLT",
    attest: "2 atestados",
    workload: "30 horas semanais",
    vocation: "10 dias",
    absence: "1 falta",
    payment: "R$ 5.800,00",
  },
  {
    id: 4,
    name: "Ruan Abreu",
    role: "Desenvolvedor Full Stack",
    email: "ruan@empresa.com",
    hiring: "30/11/2021",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "6 horas",
    regulation: "PJ",
    attest: "1 atestado",
    workload: "30 horas semanais",
    vocation: "15 dias",
    absence: "3 faltas",
    payment: "R$ 6.200,00",
  },
  {
    id: 5,
    name: "Lucas Valença",
    role: "Desenvolvedor Full Stack",
    email: "lucas@empresa.com",
    hiring: "15/09/2023",
    workday: "Segunda a Sexta",
    dayoff: "Sábado e Domingo",
    overtime: "4 horas",
    regulation: "CLT",
    attest: "0 atestados",
    workload: "30 horas semanais",
    vocation: "18 dias",
    absence: "0 faltas",
    payment: "R$ 5.900,00",
  },
];

function EditableField({ label, value, onChange }) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    onChange(tempValue);
  };

  return (
    <p onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
      <strong>{label}:</strong>{" "}
      {editing ? (
        <input
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        value
      )}
    </p>
  );
}

function EmployeeDetail({ userRole }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employeeData.find((emp) => emp.id === parseInt(id));
  const [employeeState, setEmployeeState] = useState({ ...employee });

  const [messages, setMessages] = useState([
    {
      from: "funcionario",
      text: "Olá",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages([...messages, { from: "usuario", text: input, time }]);
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

            {userRole === "gerente" && (
              <>
                {[
                  ["Dia da Contratação", "hiring"],
                  ["Dias de Trabalho", "workday"],
                  ["Folga", "dayoff"],
                  ["Horas Extras", "overtime"],
                  ["Contrato", "regulation"],
                  ["Atestado", "attest"],
                  ["Carga Horária", "workload"],
                  ["Férias", "vocation"],
                  ["Faltas", "absence"],
                  ["Salário", "payment"],
                ].map(([label, key]) => (
                  <EditableField
                    key={key}
                    label={label}
                    value={employeeState[key]}
                    onChange={(newValue) =>
                      setEmployeeState({ ...employeeState, [key]: newValue })
                    }
                  />
                ))}
              </>
            )}
          </div>

          <div className="chat-box">
            <h3>Chat com {employee.name}</h3>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.from}`}>
                  <div>{msg.text}</div>
                  <div className="message-time">{msg.time}</div>
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
