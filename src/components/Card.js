import React, { useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ card }) => {
  return <div
    className="card">
      <h2>{card.title}</h2>
      <h3>{card.owner}</h3>
      <p>{card.message}</p>
  </div>
};

// Card.PropTypes = {
  
// };

export default Card;