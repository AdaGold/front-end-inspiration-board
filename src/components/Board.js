import React, { useEffect, useState } from 'react';
import InspirationApi from '../api/inspirationApi';

import Card from './Card';
// import PropTypes from 'prop-types';

const Board = ({ selectedBoard }) => { 
  const [cards, setCards] = useState();

  const fetchCards = async () => {
    const cards = await new InspirationApi().getCards(selectedBoard);
    setCards(cards);
    return;
  } 

  useEffect(() => {
    if (!selectedBoard) return;
    fetchCards();
  }, [selectedBoard])

  return (
    <div className="cardsFlexBox">
      { cards?.map(card => <Card card={card} /> ) }
    </div>
  )
};

// Board.propTypes = {

// };

export default Board;