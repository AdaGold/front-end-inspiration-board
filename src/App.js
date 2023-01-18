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
  //const axios = require("axios");
  const BOARDS = [];
  const [boardsData, setBoardsData] = useState(BOARDS);

  const selectBoard = () => {};

  useEffect(() => {
    axios
      .get("https://ancient-inlet-63477.herokuapp.com/boards")
      .then((response) => {
        const boards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
            cards: board.cards,
          };
        });
        console.log(boards);
        setBoardsData(boards);
      })
      .catch(() => {
        console.log("This request could not go through");
      });
  });

  return (
    <div id="App">
      <header></header>
      <main>
        <BoardList boards={boardsData} />
        <NewBoardForm />
        <NewCardForm />
        {/* <Board /> */}
      </main>
    </div>
  );
};
export default App;
