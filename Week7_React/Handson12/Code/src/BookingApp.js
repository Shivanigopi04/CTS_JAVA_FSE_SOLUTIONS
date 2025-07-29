// src/BookingApp.js
import React, { useState } from 'react';

const GuestPage = () => (
  <div>
    <h2>✈️ Guest Flight Details</h2>
    <ul>
      <li>Flight: AI-101 | From: Delhi → To: Mumbai | Time: 10:00 AM</li>
      <li>Flight: SG-202 | From: Chennai → To: Bangalore | Time: 2:30 PM</li>
    </ul>
    <p><strong>Please login to book tickets.</strong></p>
  </div>
);

const UserPage = () => (
  <div>
    <h2>👤 User Booking Page</h2>
    <p>Welcome! You can now book tickets.</p>
    <button onClick={() => alert("Ticket Booked Successfully!")}>Book Ticket</button>
  </div>
);

const BookingApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div>
      <h1>🎫 Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      <hr />
      {pageContent}
    </div>
  );
};

export default BookingApp;
