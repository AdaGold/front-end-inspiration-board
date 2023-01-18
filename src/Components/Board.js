import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from 'src/components/Card.js';

const Board = (props) => {
  if (typeof props.board != "undefined") {
    const getCardsJSX = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          id={card.id}
          message={card.message}
          likes={card.likes}
        />
        );
      });
    };

    return <div>
      <section class="cardsContainer">
        <ul>{getCardsJSX(props)}</ul>
      </section>
      <NewCardForm />
    <div />

  } else {
    return null
  }
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};