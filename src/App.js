import "./App.css";
import CreateBoard from "./components/CreateBoard";
import { useState } from "react";
import React from "react";
import CreateCard from "./components/CreateCard";
import BoardsList from "./components/BoardsList";

function App() {
  const [BoardData, setBoardData] = useState([]);
  const [CardsData, setCardsData] = useState([]);
  const [Options, setOptions] = useState([]);

  const addBoardData = (newBoard) => {
    const newBoardList = [...BoardData];
    const optionsList = [...Options];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner,
    });
    optionsList.push({
      value: "Title",
      label: `${newBoard.title} by ${newBoard.owner}`,
      // bgColor: "#da3b01", // background color of each title in select
      color: "#696969", // text color of each title in select
    });
    setBoardData(newBoardList);
    setOptions(optionsList);
  };

  const addCardsData = (newCard) => {
    const newCardsList = [...CardsData];

    newCardsList.push({
      boardId: newCard.boardId,
      text: newCard.title,
      likesCount: newCard.likesCount,
    });
    setCardsData(newCardsList);
  };

  /*
  const diplayCardsByBoardId = () => {};
  */

  /* ADD API CALL ON EVENT HANDLER:
    - When board is selected,  pull all cards associated to that board.

Q: Should this drop-down menu be its own component?
    */

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CreateBoard addBoard={addBoardData}></CreateBoard>
          <BoardsList options={Options} />
          <CreateCard addCard={addCardsData}></CreateCard>
          {/* <Board displayCards={displayCardByBoardId}/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
