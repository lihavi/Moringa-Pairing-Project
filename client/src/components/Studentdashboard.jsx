import React, { useEffect, useState } from "react";
import img from '../assets/logo.png'
function Studentdashboard({token}) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/user/me', {
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
  return (
 
   
      <div className="container  pt-5 me-5 admindashboard">
  <div className="row align-items-center ms-5 pt-5">
    <div className="col">
     <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Group</span></h4>
   <h6 className="total">No: no  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Grade</span></h4>
    <h6 className="total">grade: 10  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Assigned TM</span></h4>
    <h6 className="total">Name: Name of TM</h6>
  </div>
</div>
    </div>
  </div>

  <div class="row justify-content-center pt-5 ms-5">
    <div class="col-5 text-start">
    <h3><u>Strenghts</u></h3>
    {user &&
      <div className="car cardp">
        <div className="upper">
          {/* <img src={img} className="img-fluid" height="5" alt='img' />*/}
        </div>
        <div className="user text-center">
          <div className="profile">
            <img src={img} className="rounded-circle" width="60" alt="img" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">{user.fullname}</h4>
          <div className="d-flex justify-content-between align-items-center mt-4 ms-5 px-4">
            <div className="stats">
              <h6 className="mb-0">Role</h6>
              <span>{user.role}</span>
            </div>
            <div className="stats">
              <h6 className="mb-0">Email</h6>
             <span>{user.email}</span>
            </div>
          </div>
          <div className="d-flex pbtn ">
            <button type="submit" className="mt-5 ms-5 btn btn-primary">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    }
    </div>
    
  </div>


</div>
  
   
  );
}

export default Studentdashboard;
