// src/ComplaintRegister.js
import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName || !complaint) {
      alert("Please fill in all fields.");
      return;
    }

    const referenceNo = 'REF' + Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint Registered Successfully!\nReference No: ${referenceNo}`);
    
    // Clear form
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛠 Complaint Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter your name"
            required
            style={{ width: '300px', padding: '5px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginTop: '15px' }}>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your complaint"
            rows="5"
            cols="40"
            required
            style={{ padding: '5px' }}
          />
        </div>

        <button type="submit" style={{ marginTop: '15px', padding: '10px 20px' }}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
