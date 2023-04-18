import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import Students from './Students';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
