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
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [showBoard, setShowBoard] = useState(true);

  //get all boards with get request to axios--This is working but need to be refactored
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        // console.log("response:", response);
        // console.log("response data", response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        // console.log("error:", error);
        // console.log("error response:", error.response);
      });
  }, []);

  //create a new board with post request to axios --This is working
  const makeNewBoard = (enteredData) => {
    // console.log(enteredData);
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
          // console.log("response:", response);
          // console.log("response data:", response.data);
          setBoardData([...boardData, response.data]);
        })
        .catch((error) => {
          // console.log("error:", error);
        });
    }
  };

  //post new card to board--This works but currently only accepts hard-coded data
  //Currently this allows a user to submit a card with empty strings. I'm planning to add the logic above in the post boards function to prevent that when it is complete.
  //Add logic to disable submission and return error if there are no boards
  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        //card message data and the id
        message: "inspiration",
        board_id: 7,
      })
      .then((response) => {
        // console.log("response:", response);
        // console.log("response data:", response.data);
        // console.log("it worked");
      })
      .catch((error) => {
        // console.log("error:", error.response.data);
      });
  };
  //pass in id for a specific board and use it to make a new card

  // get card by board id
  // const getCardbyBoardID = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/6/cards`)
  //     .then((response) => {
  //       console.log("response:", response);
  //       console.log("response data:", response.data);
  //       // setCardData([...cardData, response.data]);
  //       console.log("Board ID Working");
  //     })
  //     .catch((error) => {
  //       console.log("error:", error);
  //     });
  // };

  //hide the board when user clicks hide button, needs to be updated (add conditional logic from createnewboard)
  const hideBoardForm = () => setShowBoard(!showBoard);
  //add a board component 
  //accept props return div
  //wrap the board components not board.title 

  const boardsElements = boardData.map((board) => {
    console.log(board.board_id)
    return (
    <li key={board.board_id}><Board title={board.title}></Board></li>
    )
  })
  


  // whenever SelectABoard is changed, run the axios call to find all cards related to that board

//add functionality of displaying board here
//move new board form here and all boards element
//have a function that determines if we display the cards
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
