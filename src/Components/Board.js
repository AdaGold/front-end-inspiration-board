import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from "./Card.js";
import NewCardForm from "./NewCardForm";

const Board = (props) => {
  if (props.board.length !== 0) {
    const getCardsJSX = (props) => {
      return props.board.map((card) => {
        return <Card id={card.id} message={card.message} likes={card.likes} />;
      });
    };

    return (
      <div>
        <section class="cardsContainer">
          <ul>{getCardsJSX(props)}</ul>
        </section>
        <NewCardForm />
      </div>
    );
  } else {
    return <section></section>;
  }
};

// Board.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   creator: PropTypes.string.isRequired,
//   cards: PropTypes.arrayOf(PropTypes.object),
// };

export default Board;
