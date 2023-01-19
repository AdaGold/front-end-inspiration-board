import React from "react";
import "./SelectBoard.css";

//I edited this section by adding by changing the const boardTitles. It is similar to what was here before but now we don't need a separate file for board.js.
//I left the original code and moved it to the bottom and commented it out so it can be changed back if you prefer it the other way
//creates key with board_id, value of board.id, and content of the options set to title of boardData
//renders select element that calls selectBoard and populates it with the boardTitles data
const SelectBoard = (props) => {
  // const boardTitles = props.boardTitles;
  const boardTitles = props.boardData.map((board) => {
    // console.log(board.id)
    return (
    
      <option key={board.boar_id} value={board.id}>
        {/* {board.id} */}
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
 