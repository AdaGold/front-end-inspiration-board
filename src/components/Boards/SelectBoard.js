import React from "react";
import "./SelectBoard.css";




//creates key with board_id, value of board.id, and content of the options set to title of boardData
//renders select element that calls selectBoard and populates it with the boardTitles data
// const SelectBoard = (props) => {
  
// const SelectBoard = (props) => {
  
//   const boardTitles = props.boardData.map((board) => {
//     // console.log(board.id)
//     return (
    
//       <option key={board.boar_id} value={board.id}>
//         {/* {board.id} */}
//         {board.title}
//       </option>
//     );
//   });

//   //e.value.getattribute

//   return (
//     <div className="select-board-menu">
//       <h2 className="select-board-header">Select a Board</h2>
//       <select id="dropdown"
//         onChange={props.onSelectBoard}>
//           {boardTitles}
//       </select>
//     </div>
//   );
// };



  const SelectBoard = (props) => {
    // const [selectedBoard, setSelectedBoard] = useState("");
    const boards = props.boardData.map((board) => (
      return (
      <li key={board.board_id}>{board.title}</li>
    )
    return (
    <div>
      <h1 id="select-board-header">Select a Board</h1>
      <button>
      <li
        className="select-board-menu"
        onClick={() => console.log(props.value)}
      >
        {/* selectBoardTitle(board.boardID) */}
        {boards}
      </li>
      </button>
    </div>
  );
  );
    };

export default SelectBoard;





  


//  {/* <option default>Select an Inspiration Board</option> */} line 20
// );
// };
// {boardTitles.map((title) => {
//   return <option value={title}>{title}</option>;
 
