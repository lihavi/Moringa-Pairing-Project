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
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fullname</th>
      <th scope="col">grade</th>
    </tr>
  </thead>
  <tbody>
  {students.map((student) => (
    <tr>
      <th scope="row">{student.id}</th>
      <td>{student.fullname}</td>
      <td>{student.grade}</td>
    </tr>
  ))}
   
  </tbody>
</table>
      
    </div>
  )
}

export default Students
