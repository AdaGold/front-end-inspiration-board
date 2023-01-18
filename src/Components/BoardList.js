import React from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";

const BoardsList = (props) => {
  const boardComponents = props.boardsList.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        creator={board.creator}
        // showBoardCallBack={props.showBoardCallBack}
        selectBoard={props.selectBoard}
      />
    );
  });
  return <div>{boardComponents}</div>;
};

BoardsList.propsTypes = {
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

export default BoardsList;
  );
};



export default BoardList;
