// src/EmployeeCard.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? 'white' : 'black',
    padding: '10px',
    border: 'none',
    marginTop: '10px'
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <button style={buttonStyle}>View Profile</button>
    </div>
  );
};

export default EmployeeCard;
