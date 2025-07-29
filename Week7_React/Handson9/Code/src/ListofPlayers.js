// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 90 },
    { name: "Dhoni", score: 65 },
    { name: "Raina", score: 45 },
    { name: "Jadeja", score: 70 },
    { name: "Rahul", score: 35 },
    { name: "Bumrah", score: 50 },
    { name: "Shami", score: 76 },
    { name: "Gill", score: 95 },
    { name: "Pant", score: 60 },
    { name: "Kohli", score: 89 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with Score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
