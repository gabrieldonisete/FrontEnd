import React from 'react';
import ReactDOM from 'react-dom';
import CarList from './CarList';

const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];

ReactDOM.render(
  <CarList cars={cars} />,
  document.getElementById('root')
);