

const Board = (props) => {

    const handleClick = () => {
        props.setBoard(props.board)
    }

    return <div className="boardButton" onClick={handleClick}> {props.board.title} </div>

}

export default Board;