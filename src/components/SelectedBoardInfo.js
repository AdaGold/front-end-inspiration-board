import { useEffect, useState } from 'react';
import InspirationApi from '../api/inspirationApi';
import PropTypes from 'prop-types';

const SelectedBoardInfo = ({ selectedBoardId }) => {
  const [selectedBoard, setSelectedBoard] = useState();

  const fetchBoard = async () => {
    const boards = await new InspirationApi().getBoards();
    const currentBoard = boards.filter(board => board.board_id === selectedBoardId)[0];
    setSelectedBoard(currentBoard);
  }

  useEffect(() => {
    fetchBoard();
  }, [selectedBoardId])

  if (!selectedBoardId) {
    return <h1>Select a board!</h1>;
  }

  return (
    <div className="selected-board-info-container">
      <h1>{selectedBoard?.title}</h1>
      <h3>Created by {selectedBoard?.owner}</h3>
    </div>
  )
}

SelectedBoardInfo.propTypes = {
  selectedBoardId: PropTypes.number,
}

export default SelectedBoardInfo;