// src/EventDemo.js
import React, { useState } from 'react';

const EventDemo = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);

  // Increment with multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert("Hello! You clicked increment.");
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  // Welcome Button Function
  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  // Synthetic Event Example
  const handleClick = (e) => {
    alert("I was clicked!");
    console.log("Synthetic event type:", e.type);
  };

  // Currency Convertor
  const handleConvert = () => {
    const euro = (parseFloat(amount) / 90).toFixed(2); // Example rate: 1 Euro = ₹90
    setConverted(euro);
  };

  return (
    <div>
      <h2>React Event Handling Example</h2>

      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Event Handling!")}>
        Say Welcome
      </button>
      <p>{message}</p>

      <br />

      <button onClick={handleClick}>Synthetic Event (OnPress)</button>

      <br /><br />

      <h3>Currency Convertor: INR to Euro</h3>
      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      {converted && <p>💶 Converted Value: €{converted}</p>}
    </div>
  );
};

export default EventDemo;
