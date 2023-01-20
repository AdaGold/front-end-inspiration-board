import "./App.css";
import CreateBoard from "./components/CreateBoard";
import { useEffect, useState } from "react";
import React from "react";
import CreateCard from "./components/CreateCard";
import BoardsList from "./components/BoardsList";
import axios from "axios";
import background from "./inspo.jpg";

// const getBoardList = () => {
// axios.get('https://blin-inspiration-board-backend.herokuapp.com/boards',{})
// .then((response)=> {
//   console.log("Success!");
//   return response.data;
// })
// .catch(() => {
//   console.log('error!');
// });
// }
function App() {
  const [BoardData, setBoardData] = useState([]);
  const [CardsData, setCardsData] = useState([]);
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://blin-inspiration-board-backend.herokuapp.com/boards")
      .then((response) => {
        console.log(response.data);

        const optionsList = [...Options];

        optionsList.push({
          value: "Title",
          label: `${response.data.title} by ${response.data.owner} (id: ${response.data.board_id})`,
          bgColor: "#e4eaea", // background color of each title in select
          color: "#696969", // text color of each title in select
        });
        setOptions(optionsList);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const addBoardData = (newBoard) => {
    axios
      .post(
        "https://blin-inspiration-board-backend.herokuapp.com/boards",
        newBoard
      )
      .then((response) => {
        const newBoardList = [...BoardData];

        newBoardList.push({
          title: newBoard.title,
          owner: newBoard.owner,
          id: newBoard.id,
        });

        setBoardData(newBoardList);
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
        Inspiration Board
        </header>
        <div>
          
          <CreateBoard addBoard={addBoardData}></CreateBoard>
          <BoardsList options={Options} />
          <CreateCard addCard={addCardsData}></CreateCard>
          {/* <Board displayCards={displayCardByBoardId}/> */}
        </div>
        {/* <footer className = "App-footer"> By Lee, Nashwa, Brooke, and Ihovanna</footer> */}
    </div>
  );
}

export default App;
