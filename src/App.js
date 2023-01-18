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
  const [cardData, setCardData] = useState([]);
  const [showBoard, setShowBoard] = useState(true);
  

  //get all boards with get request to axios--This is working but need to be refactored
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

  //create a new board with post request to axios --This is working
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

  //post new card to board--This is not working
 
  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        message: '',
        board_id: 2,
  })
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        console.log("it worked");
      })
      .catch((error) => {
        console.log("error:", error.response.data);
      });
  };
 

  //get all cards
  // const getAllCards = () => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log("response:", response);
  //       console.log("response data:", response.data);
  //       setCardData([...cardData, response.data]);
  //     })
  //     .catch((error) => {
  //       console.log("error:", error);
  //     });
  // };0

  //hide the board when user clicks hide button, needs to be updated (add conditional logic from createnewboard)

  const hideBoard = () => setShowBoard(!showBoard);
    
  
    
  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <div className="board-section">
            {/* <CreateNewBoard onSubmitBoard={makeNewBoard} /> */}
            <button className="hide-board-button" onClick={hideBoard}>
              {showBoard ? 'Hide Board' : 'Show Board'}
              </button>
              {showBoard ? <CreateNewBoard onSubmitBoard={makeNewBoard}/> : null}
          </div>
          <CardSection createNewCard={makeNewCard} />

          {/* <CardSection cardMessagesDisplay={makeNewCard} /> */}

          <SelectBoard boardData={boardData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
