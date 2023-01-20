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
      .catch((error) => {});
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

          console.log(response.data);
        })
        .catch((error) => {});
    }
  };

  //post new card to board
  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        message: "inspiration",
        board_id: 7,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  const hideBoardForm = () => setShowBoard(!showBoard);

  //function that runs when the board is selected by the user and updates the app state
  const onSelectBoardClick = (id) => {
    console.log("Hi, Im in the App and the board id is " + id);
    setSelectedBoard(id);
    // call axios to update state with card data
    // only call this when a button is clicked
    getCardsByBoardId(id);
  };
  //pass the function to the board component as a prop
  const boardsElements = boardData.map((board) => {
    console.log(board.board_id);
    return (
      <li key={board.board_id}>
        <Board
          title={board.title}
          id={board.board_id}
          onSelectBoard={onSelectBoardClick}
        ></Board>
      </li>
    );
  });

  // set state to be able to access cards from database in component without...
  // needing to work with complicated async issues
  const [cardsInBoard, setCardsInBoard] = useState([]);

  // once we have the board set up,
  // move this to app so we can call this function on events
  // then we can change the props to be the card list
  const getCardsByBoardId = (id) => {
    console.log(
      `calling axios, id is ${id} and url is ${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`
    );
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`)
      .then((response) => {
        let cards = [];
        for (let card of response.data.cards) {
          cards.push({
            message: card.message,
            likes_count: card.likes_count,
          });
        }
        setCardsInBoard(cards);
      });
  };

  // send props.cardsInBoard into card section component
  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <div className="board-section">
            {showBoard ? <CreateNewBoard onSubmitBoard={makeNewBoard} /> : null}
            <button className="hide-board-button" onClick={hideBoardForm}>
              {showBoard ? "Hide Board" : "Show Board"}
            </button>
          </div>
          <p>{boardsElements}</p>
          <CardSection cards={cardsInBoard}></CardSection>

          <CreateNewCard onSubmitCard={makeNewCard} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
