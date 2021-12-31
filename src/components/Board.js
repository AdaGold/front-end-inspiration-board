// const Board = (props) => {
//     return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
// };

// export default Board;

const Board = (props) => {
    return (<div onClick={() => props.onBoardSelect(props.board)}>{props.title}</div>);
};

export default Board;