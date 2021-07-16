import React, { useEffect, useState } from 'react';
import InspirationApi from '../api/inspirationApi';
import NewCardForm from './NewCardForm';
import Card from './Card';
import PropTypes from 'prop-types';

const Board = ({ selectedBoardId }) => { 
  const [cards, setCards] = useState();

  const fetchCards = async () => {
    const cards = await new InspirationApi().getCards(selectedBoardId);
    setCards(cards);
    return;
  } 

  useEffect(() => {
    if (!selectedBoardId) return;
    fetchCards();
  }, [selectedBoardId])

  return (
    <div className="cards-flex-container">
      <NewCardForm selectedBoardId={selectedBoardId} fetchCards={fetchCards} />
      { cards?.map(card => <Card card={card} /> ) }
    </div>
  )
};

Board.propTypes = {
  selectedBoardId: PropTypes.number,
}

export default Board;