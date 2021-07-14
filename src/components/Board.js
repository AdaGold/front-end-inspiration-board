import React, { useEffect, useState } from 'react';
import './Board.css';
import InspirationApi from '../api/inspirationApi';

import Card from './Card';
// import PropTypes from 'prop-types';

const Board = () => { 
  const [cards, setCards] = useState();

  useEffect( async () => {
    const c = await new InspirationApi().getCards();
    setCards(c);
  }, [])

  return (
    <div className="cardsFlexBox">
      {cards?.map(card => {
        return (
      <Card card={card} /> 
        )
      })}
    </div>
  )
};

// Board.propTypes = {

// };

export default Board;