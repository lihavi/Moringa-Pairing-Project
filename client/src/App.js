import React, { useState } from 'react';


import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);


  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
  return (
    <Router>
       <NavBar logout={logout} token={token} />
       <main>
      <Routes>
      <Route path="/loginform" element={!token ? <LoginForm setToken={setToken} /> : <Homepage token={token} />} />
        <Route path="/signupform" element={!token ? <SignupForm setToken={setToken} /> : <Homepage token={token} />} />
        <Route path="/" element={token ? <Homepage token={token} /> : <LoginForm setToken={setToken} />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
