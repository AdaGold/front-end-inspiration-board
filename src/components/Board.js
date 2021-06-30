

const Board = (props) => {

    const handleClick = () => {
        console.log("Im a button")
        props.setBoard(props.board)
    }


    return <div onClick={handleClick}> {props.board.title} </div>




}

export default Board;