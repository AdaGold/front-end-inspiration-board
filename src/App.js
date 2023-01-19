import "./App.css";
import CreateBoard from "./components/CreateBoard";
import { useState } from "react";
import React from "react";
import Select from "react-select";
import CreateCard from "./components/CreateCard";

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

  // Adding to the styles object to use as a prop, this allows us to "style" our dropdown ( <select>) this is built in
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgColor,
      fontSize: state.selectProps.myFontSize,
    }),
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

  /* ADD API CALL ON EVENT HANDLER:
    - When board is selected,  pull all cards associated to that board.

Q: Should this drop-down menu be its own component?
    */

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CreateBoard addBoard={addBoardData}></CreateBoard>
          <Select options={Options} styles={styles} />
          <CreateCard addCard={addCardsData}></CreateCard>
          {/* <Board displayCards={}/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
