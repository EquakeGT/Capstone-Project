// Technician.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./technician.css";

const Technician = () => {
  const [machines, setMachines] = useState([
    { id: 1, name: "Machine A", issue: "Overheating", failurerisk: "High", priority: "Critical⚠️", status: "In Progress", read: false },
    { id: 2, name: "Machine B", issue: "Low Power", failurerisk: "Medium", priority: "High", status: "Pending", read: false },
    { id: 3, name: "Machine C", issue: "Low Power", failurerisk: "High", priority: "Critical⚠️", status: "In Progress", read: false },
    { id: 4, name: "Machine D", issue: "Software Error", failurerisk: "High", priority: "Critical", status: "In Progress", read: false },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "⚠️ Machine A requires immediate attention!", type: "warning", read: false },
    { id: 2, message: "🆕 New task assigned to you.", type: "info", read: false },
  ]);

  const navigate = useNavigate();

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const toggleReadStatus = (id) => {
    setMachines(
      machines.map((m) =>
        m.id === id ? { ...m, read: !m.read } : m
      )
    );
  };

  const handleManageClick = (id) => {
    navigate(`/create-progress-report/${id}`);
  };

  return (
    <div className="technician-page">
      <div className="header-row">
        <h1>Technician Dashboard</h1>
        <div className="view-maintenance-container">
          <button
            className="view-maintenance-button"
            onClick={() => navigate("/view-past-maintenance")}
          >
            View Past Maintenance
          </button>
        </div>
      </div>

      <div className="notification-container">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => markAsRead(n.id)}
            className={`notification ${n.type} ${n.read ? "read" : ""}`}
          >
            {n.message}
          </div>
        ))}
      </div>

      <div className="table-container">
        <table id="machineTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Machine</th>
              <th>Issue</th>
              <th>Failure Risk</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Manage</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine) => (
              <tr key={machine.id}>
                <td>{machine.id}</td>
                <td>{machine.name}</td>
                <td>{machine.issue}</td>
                <td>{machine.failurerisk}</td>
                <td>{machine.priority}</td>
                <td>{machine.status}</td>
                <td>
                  <button onClick={() => handleManageClick(machine.id)}>📝 Create Report</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={machine.read}
                    onChange={() => toggleReadStatus(machine.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Technician;
