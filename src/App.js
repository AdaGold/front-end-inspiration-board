import "./App.css";
import CreateBoard from "./components/CreateBoard";
import { useState } from "react";
import React from "react";
import CreateCard from "./components/CreateCard";
import BoardsList from "./components/BoardsList";
import axios from "axios";


const getBoardList = () => {
axios.get('https://blin-inspiration-board-backend.herokuapp.com/boards',{})
.then((response)=> {
  console.log("Success!");
  return response.data;
})
.catch(() => {
  console.log('error!');
});
}
function App() {
  const [BoardData, setBoardData] = useState([]);
  const [CardsData, setCardsData] = useState([]);
  const [Options, setOptions] = useState([]);

  const addBoardData = (newBoard) => {
    axios.post('https://blin-inspiration-board-backend.herokuapp.com/boards',newBoard)
    .then((response) => {
    const newBoardList = [...BoardData];
    const optionsList = [...Options];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner,
      id: newBoard.id
    });
  
    optionsList.push({
      value: "Title",
      label: `${newBoard.title} by ${newBoard.owner} (id: ${newBoard.id})`,
      // bgColor: "#da3b01", // background color of each title in select
      color: "#696969", // text color of each title in select
    });
    setBoardData(newBoardList);
    setOptions(optionsList);
  })
  .catch((error) => {
    console.log("Error", error);
  });
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
