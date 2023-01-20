import "./Board.css";
import { useState } from "react";

//handleBoardSelect function gets the value of the event target and calls the onSelectBoard function (which is passed in as a prop)
const Board = (props) => {
  const handleBoardSelect = (event) => {
    props.onSelectBoard(event.target.value);
  };


//button that has on click event and calls the handleBoardSelect function
  return (
    <button
      className="board_title"
      value={props.id}
      onClick={handleBoardSelect}
    >
      {props.title}
      {props.id}
    </button>
  );
};

export default Board;
