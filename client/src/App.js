import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Students from './components/Students';
import Messaging from './components/Messaging';
import Pairing from './components/Pairing';
import Feedback from './components/Feedback';
import Instructor from './components/Instructor';
import Footer from './components/Footer';
import'./App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
          <Route path="/instructor" element={token && token.user && (token.user.role === "admin") ? <Instructor /> : null} />
         <Route />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
