import React from 'react';

const BoardList = ({ boards, onBoardClick }) => {
    console.log({ boards })

    const onClick = (e, board) => {
        e.preventDefault();
        onBoardClick(board)
    }
    return (
        <div>
            <h1>List of Boards</h1>
            {boards && boards.length > 0 && boards.map(board => {
                return (
                    <p key={board.board_id} onClick={e => onClick(e, board)}>{board.title}</p>
                )
            })}
        </div>
    )
}
export default BoardList;