import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Col, Container, Form, Row, Nav } from 'react-bootstrap';

function Pairing() {
  const [pairs, setPairs] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState({});

  useEffect(() => {
    axios.get('https://moringa-pair.onrender.com/api/pairs/current-week')
      .then(response => {
        setPairs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePairChange = () => {
    axios.put(`https://moringa-pair.onrender.com/api/pairs/${selectedPair.id}`, selectedPair)
      .then(response => {
        setPairs(response.data);
        setModalOpen(false);
      })
      .catch(error => {
        console.log(error);
      });

  const [student1Id, setStudent1Id] = useState('');
  const [student2Id, setStudent2Id] = useState('');
  const [message, setMessage] = useState('');
  const handleGeneratePairs = async () => {
    try {
      const response = await axios.post('http://localhost:3000/pair_students');
      setPairs(response.data);
      setMessage('Pairs generated successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to generate pairs');
    }
  };
  
  const handleCreatePair = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/pairs', { student1_id: student1Id, student2_id: student2Id });
      setPairs([...pairs, response.data]);
      setMessage('Pair created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to create pair');
    }

  };

  const handleDeletePair = async (pairId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/pairs/${pairId}`);
      setPairs(pairs.filter((pair) => pair.id !== pairId));
      setMessage('Pair deleted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete pair');
    }
  };

  const handleDeleteAllPairs = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/pairs`);
      setPairs([]);
      setMessage('All pairs deleted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete all pairs');
    }
  };
  

  useEffect(() => {
    const fetchPairs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pairs');
        setPairs(response.data);
      } catch (error) {
        console.error(error);
        setMessage('Failed to fetch pairs');
      }
    };
    fetchPairs();
  }, []);

  return (

    <div className='container text-center pt-5 me-5 admindashboard'>
      <div className='row'>
      <h1>Pairing Page</h1>
      <table>
        <thead>
          <tr>
            <th>Pair ID</th>
            <th>Student 1</th>
            <th>Student 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map(pair => (
            <tr key={pair.id}>
              <td>{pair.id}</td>
              <td>{pair.student1}</td>
              <td>{pair.student2}</td>
              <td>
                <button onClick={() => handlePairSelect(pair)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Pair</h2>
            <label htmlFor="student1">Student 1:</label>
            <input
              type="text"
              id="student1"
              value={selectedPair.student1}
              onChange={e => setSelectedPair({...selectedPair, student1: e.target.value})}
            />
            <label htmlFor="student2">Student 2:</label>
            <input
              type="text"
              id="student2"
              value={selectedPair.student2}
              onChange={e => setSelectedPair({...selectedPair, student2: e.target.value})}
            />
            <button onClick={handlePairSwap}>Swap Students</button>
            <button onClick={handlePairChange}>Save Changes</button>
            <button onClick={handlePairClose}>Cancel</button>
          </div>
        </div>
      )}
      </div>
    </div>

    <Container fluid>
      <Row>
        <Col md={2} className="bg-light">
          <Nav className="flex-column">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#" onClick={handleGeneratePairs}>Generate Pairs</Nav.Link>

            <Nav.Link href="#" onClick={handleDeleteAllPairs}>Delete.all</Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="mt-3">
          <h1>Pair List</h1>
          {/* <Form onSubmit={handleCreatePair}>
            <Form.Group>
              <Form.Label>Student 1 ID:</Form.Label>
              <Form.Control type="text" value={student1Id} onChange={(event) => setStudent1Id(event.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Student 2 ID:</Form.Label>
              <Form.Control type="text" value={student2Id} onChange={(event) => setStudent2Id(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Create Pair</Button>
          </Form> */}
          <p>{message}</p>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {pairs.map((pair) => (
              <Col key={pair.id}>
                <Card>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "24px", padding: "10px 0" }}>
                      {pair.student1_name} and {pair.student2_name}
                    </Card.Title>
                    <Card.Text style={{color: "black", fontSize: "16px"}}>
                      Pair ID: {pair.id} <br />
                      Week: {pair.week_no} <br />
                      Created at: {new Date(pair.created_at).toLocaleString()}
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDeletePair(pair.id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
              
              
            ))}
          </Row>
        </Col>
      </Row>
    </Container>

  );
}
export default Pairing; 


