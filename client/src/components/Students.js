import React, { useState, useEffect } from "react";

function Students() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);
  const [pairingPreferences, setPairingPreferences] = useState(null);
  

  useEffect(() => {
    fetch("/api/student-info") // Replace this with the URL for your backend endpoint that fetches the student's information
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setStudent(data.student);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  const handlePairingPreferencesChange = (e) => {
    setPairingPreferences({
      ...pairingPreferences,
      [e.target.value]: e.target.checked,
    });
  };

  const handlePairingPreferencesSubmit = (e) => {
    e.preventDefault();
    fetch("/api/update-pairing-preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pairingPreferences),
    }) // Replace this with the URL for your backend endpoint that updates the student's pairing preferences
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        alert("Pairing preferences updated successfully");
      })
      .catch((error) => {
        alert(`Error updating pairing preferences: ${error.message}`);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <img src={student.profilePicture} alt={student.name} />
      <p>Current Pairing: {student.currentPairing}</p>
    </div>
  );
};

export default Students;

