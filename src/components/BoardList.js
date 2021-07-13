import React from 'react';

const BoardList = ({ boards }) => {
    console.log({ boards })
    return (
        <div>
            <h1>List of Boards</h1>
            {boards && boards.length > 0 && boards.map(board => {
                return (
                    <p key={board.board_id}>{board.title}</p>
                )
            })}
        </div>
    )
}
export default BoardList;