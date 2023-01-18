import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import "./App.css";
import BoardList from "./Components/BoardList";
import NewBoardForm from "./Components/NewBoardForm";
import NewCardForm from "./Components/NewCardForm";
import Board from "./componenets/Board"

const App = () => {
  return (
    <div id="App">
      <header></header>
      <main>
        <BoardList />
        <NewBoardForm />
        <NewCardForm />
        <Board />
      </main>
    </div>
  );
};

export default App;
