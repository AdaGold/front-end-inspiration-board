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
    currentBoard: {
      "board_id": 1,
      "title": "Food",
      "owner": 'Albert'
    }

  })

  const onBoardClick = (board) => {
    setCurrentBoard(board)
    getCards(board.board_id)
  }

  const setCurrentBoard = (board) => {
    const newState = { ...state }
    newState.currentBoard = board
    setState(newState)
  }

  const getCards = (board_id) => {
    const newState = { ...state }
    // make a call to the API for cards currentBoard.board_id
    // then set state.cards to those
    // newState.cards = res of API CALL
    // setState(newState)
  }

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

  const likeCard = (id) => {
    const newState = { ...state }
    // let updateCard = newState.cards.filter(card => card.card_id == id)
    for (let i = 0; i < newState.cards.length; i++) {
      let card = newState.cards[i]
      if (card.card_id == id) {
        card.likes_count++
      }
    }
    setState(newState)
  }

  return (
    <div className="App">
      <header><h1>Inspiration Board</h1></header>
      <main>
        <div className="boards">
          <BoardList boards={state.boards} onBoardClick={onBoardClick} />
          <img src='https://i0.wp.com/thumbs.gfycat.com/GreedyRightCrustacean-max-1mb.gif' alt="panda"/>
          <NewBoard createBoard={createBoard} />
        </div>
        <h2>{state.currentBoard.title}</h2>
        <CardList createCard={createCard} cards={state.cards} deleteCard={deleteCard} likeCard={likeCard} />
      </main>
    </div>
  );
}

export default App;
