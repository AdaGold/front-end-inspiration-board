import "./App.css";
import React from "react";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardWall from "./components/CardWall";
import data from "./dummidata.json";

function App() {
  return (
    <div className="App">
      {/* Side bar which contains website title, board list, and creat board form */}

      <header>
        <h1 id="title">The Burn Book</h1>
      </header>

      {/* board menu contains board select and drop down create board form */}
      <div id="board-menu">
        <nav>
          <BoardList />
        </nav>

        <div id="board-form">
          <BoardForm />
        </div>
        <div id="card-wall">
          <CardWall cards={data[0].cards} />
        </div>
      </div>
    </div>
  );
}

export default App;
