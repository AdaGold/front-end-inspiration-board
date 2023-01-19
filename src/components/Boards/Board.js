import "./Board.css"
import { useState } from "react";

const Board = (props) => {

  const [selectedBoard, setSelectedBoard] = useState(undefined);

  const onSelectBoardClick = (event) => {
    console.log('board selected')
  setSelectedBoard(event.target.value);
}


  // const Board = (props) => {
  return (
//wrapped in button so titles can be clicked
        <button>
        <li className="board_title" value={selectedBoard} onClick={onSelectBoardClick}>{props.title}</li>
        </button>
  )
}
  
export default Board;