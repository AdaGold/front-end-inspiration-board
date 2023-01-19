import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";

const App = () => {
  // const axios = require("axios");
  const BOARDS = [];
  const [boardsData, setBoardsData] = useState(BOARDS);
  const [selectedBoard, setSelectedBoard] = useState([]);
  // console.log(boardsData);
  
  const getNewCards = (clickedBoard) => {
    let cards
    console.log(clickedBoard)
    axios
      .get(
        `https://ancient-inlet-63477.herokuapp.com/boards/${clickedBoard}/cards`
      )
      .then((response) => {
        console.log(response);
        cards = response.data.map((card) => {
          return {
            id: card.id,
            message: card.message,
            likes: card.likes,
            boardId: clickedBoard
          };
        });
      setSelectedBoard(cards);}
      )
    .catch(() => {
        console.log("This request could not go through");
      });
  };


  const createBoard = (title,owner) => {
    const newBoardList = [...boardsData];
    const newlyCreatedBoard = {
      title: title,
      owner_name: owner,
    };
    newBoardList.push(newlyCreatedBoard);
    axios
      .post("https://ancient-inlet-63477.herokuapp.com/boards", newlyCreatedBoard)
      .then((response) => {
        const boards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner_name,
            cards: board.cards,
          };
        });
        setBoardsData(boards);
        console.log("That worked!");
      })
      .catch((error) => {
        console.log("Error Status Code:", error.response.status);
        console.log("Error Message:", error.response.data);
      });
  };

  const createCard = (message) => {

    const newlyCreatedCard = {
      message: message
    };
    
    axios
      .post(`https://ancient-inlet-63477.herokuapp.com/boards/${selectedBoard[0].boardId}/cards`, newlyCreatedCard)
      .then(() => {
        console.log("That worked!");
        getNewCards(selectedBoard[0].boardId);
        // setSelectedBoard(newCardList);
      })
      .catch((error) => {
        console.log("Error Status Code:", error.response.status);
        console.log("Error Message:", error.response.data);
      });
    // newCardList.push(newlyCreatedCard);


  };
  const selectBoard = (clickedBoard) => {
    console.log(clickedBoard);
    let cards
    axios
      .get(
        `https://ancient-inlet-63477.herokuapp.com/boards/${clickedBoard.id}/cards`
      )
      .then((response) => {
        console.log(response);
        if(response.data.length === 0){
          cards = [{id:-1, message: "No Cards Added Yet", likes: 0, boardId: clickedBoard.id}]
        } else {
          cards = response.data.map((card) => {
          return {
            id: card.id,
            message: card.message,
            likes: card.likes,
            boardId: clickedBoard.id
          };
        });
      }
        console.log(cards);
        setSelectedBoard(cards);
      })
      .catch(() => {
        console.log("This request could not go through");
      });
  };

  const deleteCard = (card) => {
    // const cards = board.card.filter((card) => card.id !== CardData.id);
    // setBoardsData(cards);
    axios
      .delete(`https://ancient-inlet-63477.herokuapp.com/boards/${card.boardId}/cards/${card.id}`)
      .then((response) => {
          const cards = response.data.map((card) => {
            return {
              id: card.id,
              message: card.message,
              likes: card.likes,
            };
          });
          setSelectedBoard(cards);
          console.log('The card has been deleted.');
      })
      .catch(() => {
        console.log('The card cannot be deleted.');
      });
  };

  const deleteBoard = (board) => {
    axios
      .delete(`https://ancient-inlet-63477.herokuapp.com/boards/${board.id}`)
      .then((response) => {
          const boards = response.data.map((board) => {
            return {
              id: board.id,
              title: board.title,
              owner: board.owner,
            };
          });
          setBoardsData(boards);
          console.log('The board has been deleted.');
      })
      .catch(() => {
        console.log('The board cannot be deleted.');
      });
  };

  const updateLikes = (card) => {
      axios
        .patch(
          `https://ancient-inlet-63477.herokuapp.com/boards/${card.boardId}/cards/${card.id}`, card)
        .then((response) => {
          const cards = response.data.map((card) => {
            return {
              id: card.id,
              message: card.message,
              likes: card.likes,
            };
          });
          setSelectedBoard(cards);
          console.log('That worked!');
        })
        .catch((error) => {
          console.log('Error Status Code:', error.response.status);
          console.log('Error Message:', error.response.data);
        });
    }

  useEffect(() => {
    axios
      .get("https://ancient-inlet-63477.herokuapp.com/boards")
      .then((response) => {
        const boards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner_name,
            cards: board.cards,
          };
        });
        setBoardsData(boards);
      })
      .catch(() => {
        console.log("This request could not go through");
      });
  }, []);

  return (
    <div id="App">
      <header></header>
      <main>
        <BoardList boards={boardsData} selectBoard={selectBoard} deleteBoard={deleteBoard} />
        <NewBoardForm createBoard = {createBoard} />
        <Board 
          board={selectedBoard} 
          deleteCard={deleteCard} 
          createCard={createCard}
          updateLikes={updateLikes}
        />
      </main>
    </div>
  );
};
export default App;
