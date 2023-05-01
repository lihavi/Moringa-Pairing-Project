import React, { useEffect, useState } from "react";
import './profile/studentprofile.css'
import img from '../assets/logo.png'
import axios from "axios";
function Admindashboard({token, students}) {
   
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

  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    axios
      .get("https://moringa-pair-akon.onrender.com/pairs")
      .then((response) => {
        setPairs(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const totalPairs = pairs.length;

  const [feedback, setFeedback] = useState([]);

  const fetchfeedback = async () => {
      try {
        const response = await axios.get(`https://moringa-pair-akon.onrender.com/feedbacklist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFeedback(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchfeedback();
    }, []);
    const totalfeedback = feedback.length;
const totalstudents = students.length;

  return (
 
   
      <div className="containe pt-5 me-5 admindashboar">
          <h3 className="stdash">Admin Dashboard</h3>
<div class="row justify-content-center pt-4">
  
    <div class="col-3 pt-4">
   <div className="row pt-1">
   <div className="card bg-dark " style={{width: "16rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-layer-group me-3"></i><span>Pairs</span></h4>
   <h6 className="total ms-5">Total: {totalPairs}<a className="ms-4" href="/pairs">view</a> </h6>
  
  </div>
</div>
   </div>

<div className="row pt-2">
<div className="card bg-dark pt-2" style={{width: "16rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i class="fas fa-message fa-fw me-3"></i><span>FeedBacks</span></h4>
    <h6 className="total ms-5">Total: {totalfeedback}  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
</div>

<div className="row pt-2">
<div className="card bg-dark" style={{width: "16rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Students</span></h4>
    <h6 className="total ms-5">Total: {totalstudents}</h6>
  </div>
</div>
</div>


    </div>
    <div class="col-4 pt-0">
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

export default Admindashboard;
