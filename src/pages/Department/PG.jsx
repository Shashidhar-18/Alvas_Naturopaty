import React from 'react';
import { Link } from 'react-router-dom';
import './PG.css';

const PG = () => {
  return (
    <div className="pg-container">
      <div className="banner">
        <h1>Postgraduate Programs</h1>
      </div>
      <div className="pg-content">
        <p>
          Our postgraduate programs offer advanced learning in naturopathy and yogic sciences. 
          Students gain in-depth knowledge, research opportunities, and hands-on experience.
        </p>
        <h2>Available PG Courses:</h2>
        <ul>
          <li>
            <Link to="/department/master">Master in Yoga Therapy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PG;
