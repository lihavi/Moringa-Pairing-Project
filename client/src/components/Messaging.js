
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import axios from 'axios';

function Messaging({token}) {
  const [fullname, setFullname] = useState('');
  const [grade, setGrade] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://m-pair.onrender.com/students`,
        {
          fullname: fullname,
          grade: grade,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategories([...categories, response.data]);
      setName("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="section pt-0">
    <div className="container pt-0">
      <div className="row full-height justify-content-cente pt-0">
        <div className="col-12 py-5 pt-0">
          <div className="section pb-0 pt-0 pt-sm-0 text-center pt-0">

            <div className="card-3d-wrap mx-auto pt-0">
              <div className="card-3d-wrapper">

                <div className="card-front">
                  <div className="center-wrap">
                    <form className="section text-center pt-0" onSubmit={handleSubmit}>
                      <h4 className="mb-4 pb-0">Create Student</h4>

                      <img className="mb-5 img" src={logo} alt="logoin" />

                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-style"
                          id="fullname"
                          placeholder="Fullname"
                          value={fullname} onChange={(e) => setFullname(e.target.value)} 
                          required
                        />
                        <i className="input-icon bi bi-person-fill-add"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-style"
                          id="email"
                          placeholder="Grade"
                          value={grade} onChange={(e) => setGrade(e.target.value)} required
                        />
                        <i className=" input-icon bi bi-envelope-at-fill"></i>
                      </div>
                     
                      
                      <button
                      type="submit"
                        className="btn1 mt-4 btn btn-outline-info"
                      >
                        Create Student
                      </button>
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Messaging

