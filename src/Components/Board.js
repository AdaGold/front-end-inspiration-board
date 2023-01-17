import React from "react";
import PropTypes from "prop-types";
import "../styles/Board.css";

const Board = (props) => {
  const selectBoard = () => {
    props.selectBoard(props.boardId);
  };

  return (
    <div>
      'Board'
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};