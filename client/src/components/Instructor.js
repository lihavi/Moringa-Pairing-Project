import React, { useState, useEffect } from 'react';


function Instructor() {
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://moringa-pair.onrender.com/students')
      .then(res => res.json())
      .then(data => setStudents(data));

    fetch('https://moringa-pair.onrender.com/pairs')
      .then(res => res.json())
      .then(data => setPairs(data));

    fetch('https://moringa-pair.onrender.com/feedbacks')
      .then(res => res.json())
      .then(data => setFeedbacks(data));

    fetch('https://moringa-pair.onrender.com/messages')
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'students':
        return (
          <div>
            <h2>Students</h2>
            <ul>
              {students.map(student => (
                <li key={student.id}>
                  <span>{student.fullname}</span>
                  <span>{student.user_id}</span>
                  <span>{student.grade}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'pairs':
        return (
          <div>
            <h2>Pairs</h2>
            <ul>
              {pairs.map(pair => (
                <li key={pair.id}>
                  <span>Week {pair.week_no}: </span>
                  <span>{pair.student1_id} and {pair.student2_id}</span>
                  <span>{pair.student1_user_id} and {pair.student2_user_id}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'feedbacks':
        return (
          <div>
            <h2>Feedbacks</h2>
            <ul>
              {feedbacks.map(feedback => (
                <li key={`${feedback.user_id}-${feedback.instructor_id}`}>
                  <span>From {feedback.user_id} to {feedback.instructor_id}: </span>
                  <span>{feedback.comment}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'messages':
        return (
          <div>
            <h2>Messages</h2>
            <ul>
              {messages.map(message => (
                <li key={`${message.sender_id}-${message.recipient_id}`}>
                  <span>From {message.sender_id} to {message.recipient_id}: </span>
                  <span>{message.content}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleTabClick('students')}>Students</li>
          <li onClick={() => handleTabClick('pairs')}>Pairs</li>
          <li onClick={() => handleTabClick('feedbacks')}>Feedbacks</li>
          <li onClick={() => handleTabClick('messages')}>Messages</li>
        </ul>
      </nav>
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Instructor;


