import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoard from './components/NewBoard';
import NewCard from './components/NewCard';

function App() {
  const [state, setState] = useState({
    boards: [{
      "board_id": 1,
      "title": "Food",
      "owner": 'Albert'
    },
    {
      "board_id": 2,
      "title": "Music",
      "owner": 'Maggie'
    }
    ],
    cards: [{
      "card_id": 1,
      "message": "Seafood pasta is my favorite",
      "likes_Counts": 2
    },
    {
      "card_id": 2,
      "message": "Hello - Adele",
      "likes_Counts": 2
    }]
  })

  const createBoard = (board) => {
    board.board_id = board.title.length
    const newState = { ...state }
    newState.boards.push(board)
    setState(newState)
  }
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <BoardList boards={state.boards} />
      <CardList cards={state.cards} />
      <NewBoard createBoard={createBoard} />
      <NewCard />
    </div>
  );
}

export default App;
