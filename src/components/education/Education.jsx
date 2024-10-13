import React from "react";
import "./education.scss";

export default function Education() {
  return (
    <div className="education" id="education">
      <div className="content">
        <h2>Education</h2>
        <div className="education-list">
                    <div className="education-item">
            <h3>Diploma Information Technology and Business(ITB)</h3>
            <p>Computer Science Ain Shams University, Egypt</p>
            <p>2024 - 2026</p>
          </div>
          <div className="education-item">
            <h3>Faculty of  Business Administration</h3>
            <p>National Egyptian E-Learning University (EELU), Egypt</p>
            <p>2016 - 2020</p>
            <p><strong>Major:</strong> Management - Finance & Investment</p>
            <p><strong>Bachelor Degree</strong></p>
            <p><strong>GPA:</strong> 3.15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
