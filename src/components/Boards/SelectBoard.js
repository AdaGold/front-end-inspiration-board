import React from "react";
import "./SelectBoard.css";

export default function SelectBoard(props) {
  const boardTitles = props.boardTitles;
  console.log(boardTitles);
  return (
    <div className='select-board-menu'>
      <h2 className='select-board-header'>Select an Inspiration Board</h2>
      <select id='dropdown'>
        <option default>Select an Inspiration Board</option>
        {boardTitles.map((title) => {
          return <option value={title}>{title}</option>;
        })}

      </select>
    </div>
  );
}
