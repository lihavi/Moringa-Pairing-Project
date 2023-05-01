import React, { useEffect, useState } from 'react'
import './studentprofile.css'
import img from '../../assets/logo.png'


const Adminprofile = ({token}) => { 
   
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
  return (
 
   
      <div className="containe pt-5 me-5 admindashboar">
          <h3 className="stdash">Admin Dashboard</h3>
<div class="row justify-content-center pt-3">
  
    <div class="col-3">
   <div className="row pt-2">
   <div className="card bg-dark " style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-layer-group me-3"></i><span>Groups</span></h4>
   <h6 className="total ms-5">No: no  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
   </div>

<div className="row pt-2">
<div className="card bg-dark pt-2" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i class="fas fa-message fa-fw me-3"></i><span>FeedBacks</span></h4>
    <h6 className="total ms-5">grade: 10  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
</div>

<div className="row pt-2">
<div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Students</span></h4>
    <h6 className="total ms-5">Name: Name of TM</h6>
  </div>
</div>
</div>

<div className="row pt-2">
<div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-list-ol fa-fw me-3"></i><span>Pairs</span></h4>
    <h6 className="total ms-5">Name: Name of TM</h6>
  </div>
</div>
</div>
    </div>
    <div class="col-4 pt-4">
     {user &&
      <div className="card cardp">
        <div className="upper">
          {/* <img src={img} className="img-fluid" height="5" alt='img' />*/}
        </div>
        <div className="user text-center">
          <div className="profile">
            <img src={img} className="rounded-circle" width="60" alt="img" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h5 className="mb-0">Username: {user.fullname}</h5>
          <div className="d-flex justify-content-between align-items-center mt-4 ms-5 px-4">
            <div className="stats">
              <h6 className="mb-0">Role</h6>
              <h5>{user.role}</h5>
            </div>
            <div className="stats">
              <h6 className="mb-0">Email</h6>
             <h5>{user.email}</h5>
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

export default Adminprofile
