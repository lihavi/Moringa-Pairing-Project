import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Messaging from './components/Messaging';
import Pairing from './components/Pairing';
import Feedback from './components/Feedback';
import Instructor from './components/Instructor';

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
