import React from "react";
import "./SelectBoard.css";

const SelectBoard = (props) => {
  // const boardTitles = props.boardTitles;

  const boardList = props.boardData.map((board) => {
    return (
      <option key={board.board_id} value={board.id}>
        {board.title}
      </option>
    );
  });

  // console.log(boardTitles);
  return (
    <div className="select-board-menu">
      <h2 className="select-board-header">Select a Board</h2>
      <select id="dropdown"
        onChange={props.onSelectBoard}>
          {boardList}
      </select>
    </div>
  );
};

//  {/* <option default>Select an Inspiration Board</option> */} line 20
// );
// };
// {boardTitles.map((title) => {
//   return <option value={title}>{title}</option>;



export default SelectBoard;
