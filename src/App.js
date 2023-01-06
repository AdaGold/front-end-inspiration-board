import "./App.css";
import React from "react";
import { useState } from "react";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import CardWall from "./components/CardWall";
import data from "./dummidata.json";
// import Card from "./components/Card";

function App() {
  const [currentBoard, setBoard] = useState({
    board_id: null,
    title: null,
    owner: null,
    cards: [],
  });

  const selectBoard = (selectedBoard) => {
    setBoard(selectedBoard);
    console.log(currentBoard);
  };

  const createBoard = (newBoardData) => {
    // this is pulling from dummi data need 2 update when linking to backend
    const nextId = Math.max(...data.map((board) => board.board_id)) + 1;
    const newBoard = {
      board_id: nextId,
      title: newBoardData.title,
      owner: newBoardData.owner,
      cards: [],
    };
    console.log(newBoard);
  };

  const createCard = (newCardData) => {
    const nextId =
      Math.max(...currentBoard.cards.map((card) => card.card_id)) + 1;
    const newCard = {
      card_id: nextId,
      message: newCardData.message,
      likes_count: 0,
    };
    console.log(newCard);
    console.log(`added to board id ${currentBoard.board_id}`);
  };

  return (
    <div className="App">
      {/* Side bar which contains website title, board list, and creat board form */}

      <div id="sidebar">
        <div id="logo">
          <img
            src={require("./assets/burn-book-logo.jpeg")}
            alt="logo"
            width="100%"
          ></img>
        </div>

        {/* board menu contains board select and drop down create board form */}
        <div id="board-menu">
          <nav id="board-list">
            <BoardList onSelect={selectBoard} />
          </nav>

          <div id="board-form">
            <BoardForm createBoard={createBoard} />
          </div>
        </div>
      </div>
      {/* card menu contains card for selected board and form to add a new card */}
      <div id="card-menu">
        <div id="card-wall">
          <CardWall cards={currentBoard.cards} />
        </div>
        <div id="card-form">
          <CardForm createCard={createCard} />
        </div>
      </div>
    </div>
  );
}
export default App;
