import React from "react";
import "./SelectBoard.css";

export default function SelectBoard(props) {
  const boardTitles = props.boardTitles;
  console.log(boardTitles);
  return (
    // NOTE FROM TIFFANY - Refactored code to use a map function that loops through all the
    // saved board titles and then displays an option for each one in the dropdown.
    <div className='select-board-menu'>
      <h2 className='select-board-header'>Select an Inspiration Board</h2>
      <select id='dropdown'>
        <option default>Select an Inspiration Board</option>
        {boardTitles.map((title) => {
          return <option value={title}>{title}</option>;
        })}
        {/* <option value="0">Why can't I figure this out</option>
        <option value="1">Puppies 🐕 </option>
        <option value="2">Icecream</option>
        <option value="3">I already failed my new years resolution</option>
        <option value="4">🎮 </option>  */}
      </select>
    </div>
  );
}
