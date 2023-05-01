import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

function NavBar({ token, setToken, userRole, setUserRole }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://moringa-pair-akon.onrender.com/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);

  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setToken(null);
    setUserRole(null);
    navigate('/');
  };


  return (
   
      <header> 
      <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="moringa logo" /> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userRole === "student" && (
          <li className="nav-item">
             <Link className="nav-link " to="/studentdashboard">Dashboard</Link>
          </li>
        )}
         {userRole === "admin" && (
          <li className="nav-item">
          <Link className="nav-link " to="/admindashboard">Dashboard</Link> 
          </li>
         )}
        </ul>
        <div className="d-flex">
        {token ?(
        <>
         <ul className="nav nav-pills nav-fill">
  <li className="nav-item ">
  {user && (  
    <h className="nav-link me-3" href="#/" style={{color: "black"}}> {user.fullname} </h>
  )}
  </li>
  <li className="nav-item pt-1">
      <button className="btn btn-outline-danger btn-sm"  onClick={logout}>Logout</button>
      </li>
      </ul>
        </>
        ) : (
<>
  <div className="nav-item pt-0">
  <Link to="/loginform"><button className="btn btn-outline-primary btn-sm me-2" href="login" type="submit">Login</button></Link> 
  <Link to="/signupform"><button className="btn btn-outline-primary btn-sm  " href="register" type="submit">Signup</button></Link> 
 
  </div>
</>
        )}
        </div>
        
      </div>
    </div>
  </nav>

   </header>
  
     
  );
}

export default NavBar;