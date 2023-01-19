import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from "./Card.js";
import NewCardForm from "./NewCardForm";

const Board = (props) => {
  if (props.board.length !== 0) {
    const getCardsJSX = (props) => {
      return props.board.map((card) => {
        return <Card 
        id={card.id} 
        message={card.message} 
        likes={card.likes} 
        deleteCard={props.deleteCard} 
        boardId={card.boardId}
        updateLikes={props.updateLikes}
        />;
      });
    };

    return (
      <div>
        <section class="cardsContainer">
          <h1>Cards for {props.title} </h1>
          <ul>{getCardsJSX(props)}</ul>
        </section>
        <NewCardForm createCard = {props.createCard}/>
      </div>
    );
  } else {
    return <section>
      <NewCardForm createCard = {props.createCard}/>
      </section>;
  }
};

// Board.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   creator: PropTypes.string.isRequired,
//   cards: PropTypes.arrayOf(PropTypes.object),
// };

export default Board;
