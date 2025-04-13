import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./technician.css";


const Technician = () => {
  const [machines, setMachines] = useState([
    { id: 1, name: "Machine A", issue: "Overheating", failurerisk: "High", Priority: "Critical", status: "In Progress", manage: "Manage" },
    { id: 2, name: "Machine B", issue: "Low Power", failurerisk: "Medium", Priority: "High", status: "Pending", manage: "Manage" },
    { id: 3, name: "Machine C", issue: "Low Power" },
    { id: 4, name: "Machine D", issue: "Software Error" },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Machine A requires immediate attention!", type: "warning", read: false },
    { id: 2, message: "New task assigned to you.", type: "info", read: false },
  ]);

  const navigate = useNavigate(); 

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleManageClick = (machineId) => {
    navigate(`/create-progress-report/${machineId}`); 
  };

  return (
    <div className="technician-page">
      <h1>Technician Page</h1>
      <h1>Welcome, ***</h1>

      {/* Notifications Section */}
      <div className="notification-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type} ${notification.read ? "read" : ""}`}
            onClick={() => markAsRead(notification.id)}
          >
            {notification.message} {notification.read && <span>(Read)</span>}
          </div>
        ))}
      </div>

      {/* Table Section */}
      <table id="myTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Machine</th>
            <th>Issue</th>
            <th>Failure risk</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td>{machine.id}</td>
              <td>{machine.name}</td>
              <td>{machine.issue}</td>
              <td>{machine.failurerisk}</td>
              <td>{machine.Priority}</td>
              <td>{machine.status}</td>
              <td>
                <button onClick={() => handleManageClick(machine.id)}>Create report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Technician;