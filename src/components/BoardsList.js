import { useState, useEffect } from 'react';
import InspirationApi from '../api/inspirationApi';
import PropTypes from 'prop-types';

function BoardsList({ selectedBoard, setSelectedBoard }) {
  const [boards, setBoards] = useState()

  useEffect( async () => {
    const b = await new InspirationApi().getBoard();
    setBoards(b)
  }, [])

  return (
    <>
      { boards?.map(board => {
        // TODO: update selected board on click 
        return(
          <div>
            <p>{selectedBoard === board.id && 'SELECTED' }</p>
            <p>{board.title}</p>
            <p>{board.owner}</p>
          </div>
        )
      })}
    </>
  );
}

BoardsList.propTypes = {
  selectedBoard: PropTypes.number,
  setSelectedBoard: PropTypes.func.isRequired
}

export default BoardsList;