import "./App.css";
import React from "react";
import { useState } from "react";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardWall from "./components/CardWall";
import data from "./dummidata.json";

function App() {
  const [currentBoard, setBoard] = useState(data[0]);
  console.log(currentBoard);

  const selectBoard = (selectedBoard) => {
    for (const board in data) {
      if (selectedBoard.id === board.id) {
        setBoard(board);
      }
    }
  };

  const createBoard = (newBoardData) => {
    // this is pulling from dummi data need 2 update when linking to backend
    const nextId = Math.max(...data.map(board => board.board_id)) + 1;
    
    const newBoard = {
      board_id: nextId, 
      title: newBoardData.title,
      owner: newBoardData.owner,
      cards: [],
    }
    console.log(newBoard)
  }

  return (
    <div className="App">
      {/* Side bar which contains website title, board list, and creat board form */}

      <header>
        <h1 id="title">The Burn Book</h1>
      </header>

      {/* board menu contains board select and drop down create board form */}
      <div id="board-menu">
        <nav>
          <BoardList />
        </nav>

        <div id="board-form">
          <BoardForm createBoard={createBoard}/>
        </div>
        <div id="card-wall">
          <CardWall cards={currentBoard.cards} onUpdateSelected={selectBoard} />
        </div>
      </div>
    </div>
  );
}

export default App;
