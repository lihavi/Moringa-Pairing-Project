import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Students({token}) {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/students`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setStudents(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchStudents();
      }, []);
  return (
    <div className='container text-center pt-5 me-5 admindashboard'>
        <h4><u>STUDENTS LIST</u></h4>
        <div className="row align-items-center pt-3 ms-4">

        {students.map((student) => ( 
    <div className="col-3 pt-1" key={student.id}>
     <div className="card slist bg-dark" style={{width: "15.4rem"}}>
     <p className="total mb-1"><b>{student.fullname}</b></p>
  <div className="card-body pt-0 text-start ms-2">
   <p className="total mb-0"><b>Student id:</b> {student.id}  </p>
   <p className="total mb-0"><b>Grade:</b> {student.grade}  </p>
   <p className="total mb-0"><b>Group:</b> {student.id}  </p>
  </div>
</div>
    </div>
        ))}

  </div>
      
    </div>
  )
}

export default Students
