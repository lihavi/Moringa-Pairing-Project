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
    <div>
      <p>messaging</p>
    </div>
  )
}

export default Messaging;
