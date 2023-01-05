import logo from './logo.svg';
import './App.css';
import BoardForm from './components/BoardForm';
import {useState} from 'react'
import React from 'react';
function App() {
  const [BoardData, setBoardData] = useState([])
  
  const addBoardData = newBoard => {

    const newBoardList = [...BoardData];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner
    });
    setBoardData(newBoardList)
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BoardForm addBoard={addBoardData} ></BoardForm>
        </div>
      
      </header>
    </div>
  );
}

export default App;
