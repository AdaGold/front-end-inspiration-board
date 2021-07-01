import './App.css';
import NewBoardForm from './components/NewBoardForm';
import CardDisplay from './components/cardDisplay';
import Board from './components/Board';
import { useState, useEffect } from 'react';

const axios = require('axios');

console.log(`${process.env.REACT_APP_BACKEND_URL}`)

function App() {
  //-----------------board states---------------------
  const [boardErrorMessage, setBoardErrorMessage] = useState("")
  const [selectedBoard, setSelectedBoard] = useState({ title: '', owner: '', board_id: null })
  const [boardsData, setboardsData] = useState([])
  const [boardFormDisplay, setBoardFormDisplay] = useState(true)

  //-------------------card states----------------------
  const [cardErrorMessage, setCardErrorMessage] = useState("")

  // add new board, API call
  const addBoard = (boardData) => {
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

  const toggleBoardForm = () => { setBoardFormDisplay(!boardFormDisplay) }

  const addCard = (message) => {
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

  //loads board list
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
    }).then((response) => {
      console.log(response.data)
      setboardsData(response.data);
    })
  }, [])


  const selectBoard = (board) => {
    setSelectedBoard(board)
  }

  const boardList = boardsData.map((board) => {
    return (<li>
      <Board key={board.id} board={board} setBoard={selectBoard}> </Board>
    </li>)
  });

  const cardLike = (cardId) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`,)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });
  };

  const cardDelete = (cardId) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`,)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });
  };

  return (
    <main>
      <h1>INSPO BOARD</h1>
      <div>THIS WILL DISPLAY ALL boards</div>
      <div>{boardList}</div>
      <section className="boardForm">
        <h1 className="formHeader">Create New Board</h1>
        {boardFormDisplay ? <NewBoardForm addBoardCallback={addBoard}>  </NewBoardForm> : ""}
        <div>{boardErrorMessage}</div>
        <span onClick={toggleBoardForm}> {boardFormDisplay ? "Hide Form" : "Show Form"} </span>
      </section>
      <div>{cardErrorMessage}</div>
      {selectedBoard.id ? <CardDisplay board={selectedBoard} likeCallBack={cardLike} deleteCallBack={cardDelete} addCardCallback={addCard}></CardDisplay> : ''}
    </main>
  );
};

export default App;
