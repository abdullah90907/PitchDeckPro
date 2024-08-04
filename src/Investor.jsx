import React from 'react';
import { Link } from 'react-router-dom';
import './Investor.css';

function Investor() {
  return (
    <div className="investor-page">
      <nav className="navbar">
        <div className="logo">PitchDeckPro</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>Investor</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
        <h1>Investor Dashboard</h1>
        <table className="startup-table">
          <thead>
            <tr>
              <th>Startup Name</th>
              <th>Submission Date</th>
              <th>Overall Score</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            <tr>
              <td>Startup A</td>
              <td>2024-07-15</td>
              <td>85</td>
              <td><Link to="/submission/1" className="submission-link">View Submission</Link></td>
            </tr>
            <tr>
              <td>Startup B</td>
              <td>2024-07-18</td>
              <td>90</td>
              <td><Link to="/submission/2" className="submission-link">View Submission</Link></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <button className="add-startup-btn">Add Startup</button>
      </div>
    </div>
  );
}

export default Investor;
