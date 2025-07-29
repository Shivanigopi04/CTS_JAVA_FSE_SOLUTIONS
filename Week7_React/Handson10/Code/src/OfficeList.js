// src/OfficeList.js
import React from 'react';

const OfficeList = () => {
  const officeSpaces = [
    {
      id: 1,
      name: "Tech Tower",
      rent: 45000,
      address: "Chennai, Tamil Nadu",
      image: "https://www.mirageglasses.com/wp-content/uploads/2020/11/it.png?text=Tech+Tower"
    },
    {
      id: 2,
      name: "Innovate Hub",
      rent: 75000,
      address: "Bangalore, Karnataka",
      image: "https://newsroom.accenture.com/news/2017/media_16816a872ea4494eb6f89014d6340adee86cdb555.jpeg?width=2000&format=webply&optimize=medium?text=Innovate+Hub"
    },
    {
      id: 3,
      name: "WorkNest",
      rent: 58000,
      address: "Hyderabad, Telangana",
      image: "https://www.jsgofficespace.co.in/wp-content/uploads/2019/11/worknest-pic-1-870x420.png?text=WorkNest"
    }
  ];

  const rentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div>
      <h1>🏢 Office Space Rental Portal</h1>
      {officeSpaces.map(office => (
        <div key={office.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <img src={office.image} alt={office.name} width="300" height="150" />
          <h2>{office.name}</h2>
          <p style={rentStyle(office.rent)}>Rent: ₹{office.rent}</p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
