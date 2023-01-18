import React from "react";
import "./SelectBoard.css";

//I edited this section by adding the const boardList. It is similar to what was here before but now we don't need a separate file for board.js.
//I left the original code and moved it to the buttom and commented it out so it can be changed back
//Option default code is at bottom

const SelectBoard = (props) => {
  // const boardTitles = props.boardTitles;
  const boardTitles = props.boardData.map((board) => {
    return (
      <option key={board.board_id} value={board.id}>
        {board.title}
      </option>
    );
  });

  return (
    <div className="select-board-menu">
      <h2 className="select-board-header">Select a Board</h2>
      <select id="dropdown"
        onChange={props.onSelectBoard}>
          {boardTitles}
      </select>
    </div>
  );
};

export default SelectBoard;


//  {/* <option default>Select an Inspiration Board</option> */} line 20
// );
// };
// {boardTitles.map((title) => {
//   return <option value={title}>{title}</option>;
