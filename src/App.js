import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import { useState } from 'react';

const axios = require('axios');



function App() {
  //-----------------board states---------------------
  const [boardErrorMessage, setBoardErrorMessage] = useState("")
  const [selectedBoard, setSelectedBoard] = useState({title: '', owner: '', board_id: null})
  const [boardsData, setboardsData] = useState([])

  //-------------------card states----------------------
  const [cardErrorMessage, setCardErrorMessage] = useState("")
  const [cardsByBoardId, setCardsbyBoardId] = useState([])
  

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
    //in order to post a card we need a board if which will have to come from selected board, a state we will have to create
    // const newCard = {
    //   message: message,
    //   board_id = selectedBoard.id
    // }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/cards`, message)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setCardErrorMessage("card error msg");
      });

  };

  //Get request that gets all boards and loops through them to display by title then saves as vriable to display in board display div. ea div will have a click function that vcalls get cards by board id. boards will be a list of objects

  return (
    <main>
      <h1>INSPO BOARD</h1>
      <div>THIS WILL DISPLAY ALL boards</div>
      <NewBoardForm addBoardCallback={addBoard}> </NewBoardForm>
      <div>{boardErrorMessage}</div>
      <NewCardForm addCardCallback={addCard}></NewCardForm>
      <div>{cardErrorMessage}</div>
      {/* <CardDisplay board={selectedboard}}></CardDisplay> */}


    </main>
  );
};

export default App;
