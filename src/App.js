import './App.css';
import NewBoardForm from './components/NewBoardForm';
import CardDisplay from './components/cardDisplay';
import Board from './components/Board';
import { useState, useEffect } from 'react';

const axios = require('axios');

console.log(`${process.env.REACT_APP_BACKEND_URL}`)
console.log("a change")

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
    return (
      <Board key={board.id} board={board} setBoard={selectBoard}> </Board>
    )
  });

  return (
    <main className="main">
      <div className="mainHeader">
      <h1>INSPO BOARD</h1>
      </div>

      <section className="inspoBoardList">
        <h3 className="listHeader">Inspiration Boards</h3>
        <div className="boardList">{boardList}</div>
      </section>

      <section className="boardForm">
        <h1 className="formHeader">Create New Board</h1>
        {boardFormDisplay ? <NewBoardForm addBoardCallback={addBoard}>  </NewBoardForm> : ""}
        <div className="boardError">{boardErrorMessage}</div>
        <span onClick={toggleBoardForm}> {boardFormDisplay ? "Hide Form" : "Show Form"} </span>
      </section>

      <div className="cardError">{cardErrorMessage}</div>

      <section className="cardDisplay">
        {selectedBoard.id ? <CardDisplay board={selectedBoard} addCardCallback={addCard}></CardDisplay> : ''}
      </section>

    </main>
  );
};

export default App;
