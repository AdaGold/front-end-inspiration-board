import React from 'react';
import '../App.css'

const BoardList = ({ boards, onBoardClick }) => {
    // console.log({ boards })

    const onClick = (e, board) => {
        e.preventDefault();
        onBoardClick(board)
    }
    return (
        <div>
            <h1>List of Boards</h1>
            <div className='board'>
                {boards && boards.length > 0 && boards.map(board => {
                return (
                    <p className='board-title'key={board.board_id} onClick={e => onClick(e, board)}>{board.title}</p>
                )
            })}
            </div>
        </div>
    )
}
export default BoardList;