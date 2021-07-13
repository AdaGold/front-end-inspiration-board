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
      'board_id': 1,
      "card_id": 1,
      "message": "Seafood pasta is my favorite",
      "likes_count": 2
    },
    {
      'board_id': 1,
      "card_id": 2,
      "message": "Hello - Adele",
      "likes_count": 2
    }
    ],
    currentBoard: 1

  })

  const createBoard = (board) => {
    board.board_id = board.title.length
    const newState = { ...state }
    newState.boards.push(board)
    setState(newState)
  }

  const createCard = (card) => {
    card.board_id = state.currentBoard
    card.likes_count = 0
    const newState = { ...state }
    card.card_id = state.cards.length + 1
    newState.cards.push(card)
    setState(newState)
  }

  const deleteCard = (id) => {
    const newState = { ...state }
    newState.cards = newState.cards.filter(card => card.card_id !== id)
    setState(newState)
  }

  const likeCard =(id) =>{
    const newState ={...state}
    // let updateCard = newState.cards.filter(card => card.card_id == id)
    for (let i=0; i<newState.cards.length; i++){
      let card =newState.cards[i]
      if(card.card_id == id){
        card.likes_count++
      }
    }
    setState(newState) 
  }
 

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <BoardList boards={state.boards} />
      <CardList cards={state.cards} deleteCard={deleteCard} likeCard={likeCard} />
      <NewBoard createBoard={createBoard} />
      <NewCard createCard={createCard} />
    </div>
  );
}

export default App;
