import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/Cards/CardSection";
import CreateNewBoard from "./components/Boards/CreateNewBoard";
import Card from "./components/Cards/Card";
import CreateNewCard from "./components/Cards/CreateNewCard";
import Board from "./components/Boards/Board";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(undefined);
  const [cardData, setCardData] = useState([]);
  const [showBoard, setShowBoard] = useState(true);


  //get all boards with get request to axios
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
      });
  }, []);

  //create a new board with post request to axios
  const makeNewBoard = (enteredData) => {
    if (
      enteredData.title.replaceAll(" ", "").length < 1 ||
      enteredData.owner.replaceAll(" ", "").length < 1
    ) {
      alert(
        "You must enter a valid title and owner. A valid title and owner must be greater than one character and cannot be white spaces."
      );
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
          title: enteredData.title,
          owner: enteredData.owner,
        })
        .then((response) => {
          setBoardData([...boardData, response.data]);
        })
        .catch((error) => {
        });
    }
  };

  //post new card to board
  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        message: "inspiration",
        board_id: 7,
      })
      .then((response) => {
      })
      .catch((error) => {
      });
  };


  const hideBoardForm = () => setShowBoard(!showBoard);


  const boardsElements = boardData.map((board) => {
    console.log(board.board_id)
    return (
    <li key={board.board_id}><Board title={board.title}></Board></li>
    )
  })
  
  const onSelectBoardClick = (event) => {
    setSelectedBoard(event.target.value);
  }

  
  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <div className="board-section">
            {/* <CreateNewBoard onSubmitBoard={makeNewBoard} /> */}
            {showBoard ? <CreateNewBoard onSubmitBoard={makeNewBoard} /> : null}
            <button className="hide-board-button" onClick={hideBoardForm}>
              {showBoard ? "Hide Board" : "Show Board"}
            </button>
          </div>
          
          {/* <SelectBoard boardData={boardData} /> */}
          <p>{boardsElements}</p>
          <CardSection board_id="26" ></CardSection>
          {/* <CardSection createNewCard={makeNewCard} /> */}
          <CreateNewCard onSubmitCard={makeNewCard} />
          {/* cardMessagesDisplay={makeNewCard} */}
          {/* <CardSection  /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
