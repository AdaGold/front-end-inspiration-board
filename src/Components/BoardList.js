import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import { useState } from "react";
import "./BoardList.css";

const BoardList = (props) => {
  console.log(props.boards);
  const [selectBoardTitle, setSelectedBoardTitle] = useState("Select a Board!");
  const [selectBoardOwner, setSelectedBoardOwner] = useState("");
  const boardComponents = props.boards.map((board) => {
<<<<<<< HEAD
    return (
      <li
        onClick={() => {
          props.selectBoard(board);
          setSelectedBoardTitle(board.title);
          setSelectedBoardOwner(board.owner);
        }}
      >
        {board.title}
      </li>
      // <Board
      //   key={board.id}
      //   id={board.id}
      //   title={board.title}yyjuuu
      //   owner={board.owner}
      //   // showBoardCallBack={props.showBoardCallBack}
      //   selectBoard={props.selectBoard}
      // />
    );
=======
    return <li onClick={() => props.selectBoard(board)}>
      {board.title} 
      <button onClick={()=>props.deleteBoard(board)}>x</button>
      </li>;
>>>>>>> a39880fd492b85414a421142969d26cbe26c9182
  });

  return (
    <div className="boardList">
      <h1>Boards</h1>
      <div>
        <label htmlFor="preview">Selected Board:</label>
        <div name="selected" className="selected">
          {selectBoardTitle} - {selectBoardOwner}
        </div>
      </div>
      <ol>{boardComponents}</ol>
    </div>
  );
};

BoardList.propsTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  // showBoardCallBack: PropTypes.func,
  selectBoard: PropTypes.func,
};

export default BoardList;
