import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <img src="https://images.app.goo.gl/3BtkuNPo1JMRVwXV6" alt="Moringa Pair Logo" />
        <h1>Moringa Pair</h1>
        <p>  Pairs students randomly and keeps track of each pair.</p>
        <Link to="/loginform" className="btn btn-primary">Login</Link>
        <Link to="/signupform" className="btn btn-primary">Sign up</Link>
        <Link to="/students" className="btn btn-primary">Students</Link>
      </div>
    </div>
  );
}

export default Homepage;
