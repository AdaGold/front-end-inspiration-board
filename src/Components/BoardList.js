import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return <li onClick={() => props.selectBoard(board)}>{board.title}</li>;
  });
  return (
    <div className="boardList">
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
