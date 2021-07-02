import './Board.css'

const Board = (props) => {

    const handleClick = () => {
        props.setBoard(props.board)
    }

    return <li className="boardButton" onClick={handleClick}> > {props.board.title} </li>

}

export default Board;