// src/register.js
import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (form.name.length < 5) {
      newErrors.name = "Name should be at least 5 characters.";
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      newErrors.email = "Email must contain '@' and '.'.";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setForm({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>📧 Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: '20px', padding: '8px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
