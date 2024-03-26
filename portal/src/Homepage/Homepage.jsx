import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom'; 

function Homepage() {
  return (
    <div>
      <div className="header">
        <h1 id="main-header">PlayMate</h1>
      </div>

      <div className="frontBtns">
      <Link to="/Game-Portal/mainpage"> 
          <button className="frontPageBtns" id="Enter">Enter</button>
          </Link>
      </div>
    </div>
  );
}

export default Homepage;
