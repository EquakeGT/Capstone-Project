import React from "react";
import { useNavigate } from "react-router-dom";
import "./view-past-maintenance.css";

const ViewPastMaintenance = () => {
  const navigate = useNavigate();
  const pastMaintenanceData = [
    {
      id: 1,
      machine: "Machine A",
      issue: "Overheating",
      failurerisk: "High",
      Time: "2025-04-15 10:00 AM",
      status: "Completed",
      technicianId: "T001",
      result: "Replaced cooling system",
    },
    {
      id: 2,
      machine: "Machine B",
      issue: "Low Power",
      failurerisk: "Medium",
      Time: "2025-04-15 10:00 AM",
      status: "Completed",
      technicianId: "T002",
      result: "Replaced power supply",
    },
    {
      id: 3,
      machine: "Machine C",
      issue: "Low Power",
      failurerisk: "Low",
      Time: "2025-04-15 10:00 AM",
      status: "Completed",
      technicianId: "T003",
      result: "Machine is beyond repair",
    },
    {
      id: 4,
      machine: "Machine D",
      issue: "Software Error",
      failurerisk: "High",
      Time: "2025-04-15 10:00 AM",
      status: "Completed",
      technicianId: "T004",
      result: "Updated software",
    },
  ];

  return (
    <div className="view-past-maintenance-page">
      <h1 className="title">View Past Maintenance</h1>
      
      
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Machine</th>
            <th>Issue</th>
            <th>Failure Risk</th>
            <th>Time</th>
            <th>Status</th>
            <th>Technician ID</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {pastMaintenanceData.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.machine}</td>
              <td>{record.issue}</td>
              <td>{record.failurerisk}</td>
              <td>{record.Time}</td>
              <td>{record.status}</td>
              <td>{record.technicianId}</td>
              <td>{record.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPastMaintenance;