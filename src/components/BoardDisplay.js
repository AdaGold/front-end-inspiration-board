const BoardDisplay = (props) => {
    return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
};

export default BoardDisplay;