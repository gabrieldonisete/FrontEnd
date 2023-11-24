// src/components/CarList.js
import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
