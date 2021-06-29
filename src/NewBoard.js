import { useState } from 'react';

const NewBoard = () => {
    const [boardChange, setBoardChange] = useState({
        boardname: '',
        owner: ''
    });

    const newBoardName = (event) => {
        setBoardChange({
            boardChange,
            boardname: event.target.value
        })
    };

    const newOwnername = (event) => {
        setBoardChange({
            boardChange,
            owner: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="nameOfBoard">Board Name:</label>
                <input
                    boardname="nameOfBoard"
                    value={boardChange.boardname}
                    onChange={newBoardName}/>
            </div>
            <div>
                <label htmlFor="ownerOfBoard">What's your name:</label>
                <input
                    owner="ownerOfBoard"
                    value={boardChange.owner}
                    onChange={newOwnername}/>
            </div>
            <input
                type="submit"
                value="New Board"/>
        </form>
    )
}

export default NewBoard;