import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import { useState } from 'react';

const axios = require('axios');



function App() {

  const [boardErrorMessage, setBoardErrorMessage] = useState("")
  const [cardErrorMessage, setCardErrorMessage] = useState("")

  // add new board, API call
  const addBoard = (boardData) => {
    console.log("i'm in API")

    const newBoard = {
      title: boardData.title,
      owner: boardData.owner
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setBoardErrorMessage("error!!!");
      });
  }

  const addCard = (message) => {
    console.log("i'm in API")

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/cards`, message)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setCardErrorMessage("card error msg");
      });

  };

  return (
    <main>
      <h1>INSPO BOARD</h1>
      <NewBoardForm addBoardCallback={addBoard}> </NewBoardForm>
      <div>{boardErrorMessage}</div>
      <NewCardForm addCardCallback={addCard}></NewCardForm>
      <div>{cardErrorMessage}</div>


    </main>
  );
};

export default App;
