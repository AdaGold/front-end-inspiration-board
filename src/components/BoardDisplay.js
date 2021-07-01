const BoardDisplay = (props) => {
    return (<div>{props.board.title}</div>); // onClick={() => props.onBoardSelect(props.board)}
};

export default BoardDisplay;