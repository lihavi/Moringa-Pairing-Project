import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Moringa Pair</h1>
        <p>  Pairs students randomly and keeps track of each pair.</p>
        <Link to="/loginform" className="btn btn-primary">Login</Link>
          <Link to="/signupform" className="btn btn-primary">Sign up</Link>
      </div>
      </div>
  );
}

export default Homepage;

