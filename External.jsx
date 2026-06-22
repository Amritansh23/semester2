import React from "react";
import "./external.css";

function External() {
  return (
    <div className="app">
      <h1 className="heading">Student Profile Dashboard</h1>

      <div className="container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
            alt="Rahul Singh"
            className="profile-img"
          />

          <div className="details">
            <p><strong>Name:</strong> Rahul Singh</p>
            <p><strong>Course:</strong> B Tech CSE</p>
            <p><strong>Year:</strong> 3rd Year</p>
            <p><strong>CGPA:</strong> 8.5</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
            alt="Riya Singh"
            className="profile-img"
          />

          <div className="details">
            <p><strong>Name:</strong> Riya Singh</p>
            <p><strong>Course:</strong> BCA</p>
            <p><strong>Year:</strong> 2nd Year</p>
            <p><strong>CGPA:</strong> 9.1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default External;