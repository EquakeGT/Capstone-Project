import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./progressreport.css";

const ProgressReport = () => {
  const navigate = useNavigate();
  const { machineId } = useParams(); 

  const handleCancel = () => {
    navigate(-1); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="progress-report-page">
      <button className="back-button" onClick={handleCancel}>
        Back
      </button>
      <div className="progress-report-container">
        <h1>Progress Report</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Task ID</label>
              <input type="text" value="001" readOnly />
            </div>
            <div className="form-group">
              <label>Machine ID</label>
              <input type="text" value={machineId || "MM-01"} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Issue</label>
              {<input type="text" value="Overheat" readOnly />  /*I preset the value to "Overheat" for testing purposes */}
            </div>
            <div className="form-group">
              <label>Failure risk</label>
              <input type="text" value="50%" readOnly />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select id="Priority" name="Priority">
                <option value="High">High</option>
                <option value="Low">Low</option>
          </select>
            </div>
          </div>
          <div className="form-group">
            <label>Progress Detail</label>
            <textarea placeholder="Enter progress details"></textarea>
          </div>
          <div className="form-group">
            <label>Limitations</label>
            <textarea placeholder="Enter limitations"></textarea>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProgressReport;