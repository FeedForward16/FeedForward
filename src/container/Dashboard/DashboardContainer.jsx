import React, { useState } from "react";
import "./dashboardContainer.css";

const DashboardContainer = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onVideoChange,
  onSubmit,
}) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={() => setDisplay(true)}>Create form</button>
      </header>

      {display && (
        <div className="form-container">
          <div className="form-close-button">
            <button onClick={() => setDisplay(false)}>Close Form</button>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Title of the Video"
              value={title}
              onChange={onTitleChange}
              required
            />
            <textarea
              placeholder="Description (optional)"
              value={description}
              onChange={onDescriptionChange}
            ></textarea>
            <input
              type="file"
              accept="video/*"
              onChange={onVideoChange}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
