import React from 'react';
import '../App.css'

const BoardList = ({ boards, onBoardClick, currentBoard }) => {
    const onClick = (e, board) => {
        e.preventDefault();
        onBoardClick(board)
    }

    return (
        <div>
            <h1>List of Boards</h1>
            <div className='board'>
            <div className="hearts">
                {boards && boards.length > 0 && boards.map(board => {
                    return (
                        <p className={board.id === currentBoard.id ? "active board-title" : "board-title"} key={board.id} onClick={e => onClick(e, board)}>{board.title} <div className="heart">♡</div> <div className="heart">♡</div> <div className="heart">♡</div> <div className="heart">♡</div></p>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default BoardList;