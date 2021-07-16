import { useState, useEffect } from 'react';
import InspirationApi from '../api/inspirationApi';
import PropTypes from 'prop-types';

function BoardsList({ selectedBoard, setSelectedBoard }) {
  const [boards, setBoards] = useState()

  const fetchBoards = async () => {
    const b = await new InspirationApi().getBoards();
    setBoards(b);
    return;
  }

  useEffect(() => {
    fetchBoards();
  }, [selectedBoard])

  return (
    <div className="boards-list-container">
      { boards?.map(board => {
        const isSelected = selectedBoard === board.board_id;
        return(
          <div className="boards-list-item">
            <h2 onClick={() => setSelectedBoard(board.board_id)} className={isSelected ? 'board-selected' : ''}>{board.title} - {board.owner}</h2>
          </div>
        )
      })}
    </div>
  );
}

BoardsList.propTypes = {
  selectedBoard: PropTypes.number,
  setSelectedBoard: PropTypes.func.isRequired
}

export default BoardsList;