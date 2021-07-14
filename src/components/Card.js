import React, { useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ id, onClickCallback, value}) => {
  return <div
    className="card"
  >
    <section>Card text will be here</section>
    <p onClick={() => onClickCallback(id)}>❤️</p>

  </div>
};

// Card.PropTypes = {
  
// };

export default Card;