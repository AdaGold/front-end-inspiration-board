import React from 'react';
import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';

const generateCardComponents = (cards, onClickCallback) => {
    const cardArray = cards.flat();
    const cardComponents = cardArray.map(card => <Card id={card.id} value={card.value} onClickCallback={onClickCallback} />)
  
    return cardComponents;
  }

const Board = ({ cards, onClickCallback}) => { 
  const cardList = generateCardComponents(cards, onClickCallback);
  return <div className="cardsFlexBox">
    {cardList}
  </div>
};

Board.propTypes = {

};

export default Board;