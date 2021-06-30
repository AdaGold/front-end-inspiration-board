import './App.css';
import NewBoardForm from './components/NewBoardForm';
import CardDisplay from './components/cardDisplay';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import { useState, useEffect } from 'react';

const axios = require('axios');



function App() {
  //-----------------board states---------------------
  const [boardErrorMessage, setBoardErrorMessage] = useState("")
  const [selectedBoard, setSelectedBoard] = useState({ title: '', owner: '', board_id: null })
  const [boardsData, setboardsData] = useState([])

  //-------------------card states----------------------
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
        setBoardErrorMessage("error:", error.data);
      });
  }

  const addCard = (message) => {
    console.log("i'm in API")
    const newCard = {
      message: message,
      board_id: selectedBoard.id
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`, newCard)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setCardErrorMessage("card error msg");
      });

  };

  //Get request that gets all boards and loops through them to display by title then saves as vriable to display in board display div. ea div will have a click function that vcalls get cards by board id. boards will be a list of objects
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
    }).then((response) => {
      console.log(response.data)
      setboardsData(response.data);
    })
  }, [boardsData])


  const selectBoard = (board) => {
    setSelectedBoard(board)
  }

  const boardList = boardsData.map((board) => {
    return (<li>
      <Board board={board} setBoard={selectBoard}> </Board>
    </li>)
  });



  return (
    <main>
      <h1>INSPO BOARD</h1>
      <div>THIS WILL DISPLAY ALL boards</div>
      <div>{boardList}</div>
      <NewBoardForm addBoardCallback={addBoard}> </NewBoardForm>
      <div>{boardErrorMessage}</div>
      <NewCardForm addCardCallback={addCard}></NewCardForm>
      <div>{cardErrorMessage}</div>
      <h1>Card Display</h1>
      <CardDisplay board={selectedBoard}></CardDisplay>


    </main>
  );
};

export default App;
