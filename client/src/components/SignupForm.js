import axios from "axios";
import {useState} from "react";

function SignupForm({ setToken }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/register`, {
        fullname,
        email,
        role,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-form__label">
          Name:
          <input className="signup-form__input" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </label>
        <label className="signup-form__label">
          Email:
          <input className="signup-form__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="signup-form__label">
          Role:
          <input className="signup-form__input" type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <label className="signup-form__label">
          Password:
          <input className="signup-form__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="signup-form__button" type="submit">Sign up</button>
      </form>
    );
  }

export default SignupForm;