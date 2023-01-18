import React from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";

const BoardList = (props) => {
  console.log(props.boards)
  const boardComponents = props.boards.map((board) => {
    return (
      <li>{board.title}</li>
      // <Board
      //   key={board.id}
      //   id={board.id}
      //   title={board.title}
      //   owner={board.owner}
      //   // showBoardCallBack={props.showBoardCallBack}
      //   selectBoard={props.selectBoard}
      // />
    );
  });
  return <div><ol>{boardComponents}</ol></div>;
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
