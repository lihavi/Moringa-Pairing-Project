import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messaging.css"

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    sender: "",
    recipient: "",
    content: "",
  });

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get("https://moringa-pair.onrender.com/messages");
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://moringa-pair.onrender.com/messages", newMessage);
      setMessages([...messages, response.data]);
      setNewMessage({ sender: "", recipient: "", content: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/messages/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="Message">
      <h2>Messaging</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  {/* <div class="col"> */}
    <div class="card">
      <form>
      <h1>Pair ID: </h1>
      <div class="input-group mb-3">
        
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Instructor</option>
    <option value="2">Student</option>
  </select>
</div>
<h1>Sender:</h1>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Sender's ID" aria-label="Sender's ID" aria-describedby="basic-addon2"/>
</div>
<h1>Recipient:</h1>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's ID" aria-label="Recipient's ID" aria-describedby="basic-addon2"/>
</div>
<h1>Content:</h1>
<div class="input-group">
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button" onClick={handleSubmit}>submit</button>
  <button class="btn btn-primary" type="button" onClick={handleDelete}>Delete</button>
  <button class="btn btn-primary" type="button" onClick={handleChange}>Change</button>
</div>
      </form>
    </div>
    </div>
    </div>
    // </div>
  );
};

export default Messaging;


