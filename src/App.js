import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";

const App = () => {
  // const axios = require("axios");
  const BOARDS = [];
  const [boardsData, setBoardsData] = useState(BOARDS);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [selectedBoardTitle, setSelectedBoardTitle] = useState([]);
  console.log(boardsData);

  const selectBoard = (clickedBoard) => {
    console.log(clickedBoard);
    axios
      .get(
        `https://ancient-inlet-63477.herokuapp.com/boards/${clickedBoard.id}/cards`
      )
      .then((response) => {
        const cards = response.data.map((card) => {
          return {
            id: card.id,
            message: card.message,
            likes: card.likes,
          };
        });
        console.log(cards);
        setSelectedBoard(cards);
        setSelectedBoardTitle(clickedBoard.title);
      })
      .catch(() => {
        console.log("This request could not go through");
      });
  };

  // const deleteCard = (CardData) => {
  //   const cards = board.card.filter((card) => card.id !== CardData.id);
  //   setBoardsData(cards);
  //   const taskId = updatedTaskData.id;
  //   axios
  //     .delete('https://task-list-api-c17.herokuapp.com/tasks/' + taskId)
  //     .then(() => {
  //       console.log('The task has been deleted.');
  //     })
  //     .catch(() => {
  //       console.log('The task cannot be deleted.');
  //     });
  // };

  useEffect(() => {
    axios
      .get("https://ancient-inlet-63477.herokuapp.com/boards")
      .then((response) => {
        const boards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner_name,
            cards: board.cards,
          };
        });
        setBoardsData(boards);
      })
      .catch(() => {
        console.log("This request could not go through");
      });
  }, []);

  return (
    <div id="App">
      <header></header>
      <h1>Inspiration Board</h1>
      <main>
        <BoardList boards={boardsData} selectBoard={selectBoard} />
        <NewBoardForm />
        <Board board={selectedBoard} title={selectedBoardTitle} />
      </main>
    </div>
  );
};
export default App;
