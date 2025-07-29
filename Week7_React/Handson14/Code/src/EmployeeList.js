// src/EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: "Alice", position: "Frontend Developer" },
    { id: 2, name: "Bob", position: "Backend Developer" },
    { id: 3, name: "Charlie", position: "UI/UX Designer" }
  ];

  return (
    <div>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
