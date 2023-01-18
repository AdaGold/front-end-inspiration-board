/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/Cards/CardSection";
import CreateNewBoard from "./components/Boards/CreateNewBoard";
import Card from "./components/Cards/Card";
import SelectBoard from "./components/Boards/SelectBoard";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [board, setBoard] = useState([]);

  const [showBoard, setShowBoard] = useState(true);
  const [cardbyId, setCardbbyId] = useState({});

  //get(URL--use above code), get all boards
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log("response:", response);
        console.log("response data", response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, []);

  //create a new board
  const makeNewBoard = (enteredData) => {
    // console.log(enteredData);
    if (enteredData.title.length < 1 || enteredData.owner.length < 1) {
      alert("You must enter a title and owner");
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
          title: enteredData.title,
          owner: enteredData.owner,
        })
        .then((response) => {
          console.log("response:", response);
          console.log("response data:", response.data);
          setBoardData([...boardData, response.data]);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  };

  //post new card to board
  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        message: cardData.messag,
        board_id: cardData.board_id,
      })
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        console.log("it worked");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  //get list of all boards

  //get list of all cards

  //hide the board, needs to be updated to show/hide board when button is clicked (add conditional logic)
  const hideBoard = () => {
    setShowBoard(false);
  };

  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <div className="board-section">
            <CreateNewBoard onSubmitBoard={makeNewBoard} />
            <button className="hide-board-button" onClick={hideBoard}>
              Hide Board
            </button>
          </div>
          <CardSection createNewCard={makeNewCard} />
          <SelectBoard boardData={boardData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
