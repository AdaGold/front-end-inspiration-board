import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import Board from "./componenets/Board"

const App = () => {
  return (
    <div id="App">
      <header></header>
      <main>
        <BoardList />
        <NewBoardForm />
        <Board />
      </main>
    </div>
  );
};

export default App;
