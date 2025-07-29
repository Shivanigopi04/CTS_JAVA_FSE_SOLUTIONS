// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20Players = ["Virat", "Rohit", "Rahul", "Pant"];
  const RanjiPlayers = ["Pujara", "Jadeja", "Saha", "Shreyas"];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  const oddTeam = mergedPlayers.filter((_, i) => i % 2 !== 0);
  const evenTeam = mergedPlayers.filter((_, i) => i % 2 === 0);

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
