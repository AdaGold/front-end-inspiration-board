import "./App.css";
import BoardForm from "./components/BoardForm";
import { useState } from "react";
import React from "react";

function App() {
  const [BoardData, setBoardData] = useState([]);

  const addBoardData = (newBoard) => {
    const newBoardList = [...BoardData];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoardData(newBoardList);
  };
  // is this 'push' pushing our data from BoardForm.js
  //            into the empty state list?
  console.log([BoardData, setBoardData]);
  console.log(addBoardData);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BoardForm addBoard={addBoardData}></BoardForm>
        </div>
      </header>
    </div>
  );
}

export default App;
