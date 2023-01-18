import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import CardWall from "./components/CardWall";

export const URL = "https://mean-girls-2004-inspo-board.herokuapp.com";

function App() {
  const [currentBoard, setBoard] = useState({
    board_id: null,
    title: null,
    owner: null,
    cards: [],
  });
  const [error, setError] = useState("");
  const [boards, setAllBoards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL + "/boards").catch((err) => {
        console.log(err);
      });
      setAllBoards(response.data);
    };
    getData();
  }, [boards]);

  const selectBoard = async (selectedBoard) => {
    const response = await axios.get(
      `${URL}/boards/${selectedBoard.board_id}/cards`
    );
    setBoard(response.data);
    setError("");
  };

  const createBoard = (newBoardData) => {
    if (newBoardData.title && newBoardData.owner) {
      setError("");
      axios
        .post(URL + "/boards", {
          title: newBoardData.title,
          owner: newBoardData.owner,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Error: Boards must have a title and an owner!");
    }
  };

  const createCard = (newCardData) => {
    if (!newCardData.message) {
      setError("Error: Cards must have a message!");
    } else if (newCardData.message.length > 40) {
      setError("Error: Cards must be less than 40 characters long!");
    } else {
      setError("");
      axios
        .post(URL + "/cards", {
          message: newCardData.message,
        })
        .then((response) => {
          const cardState = [...currentBoard.cards, response.data.message];
          setBoard({ ...currentBoard, cards: cardState });
          axios
            .post(`${URL}/boards/${currentBoard.board_id}/cards`, {
              card_ids: [response.data.message.card_id],
            })
            .catch((err) => console.log("error linking card to board: " + err));
        })
        .catch((err) => {
          console.log("error posting new card: " + err);
        });
      console.log(`added to board id ${currentBoard.board_id}`);
    }
  };

  // hides/shows board form when toggle button is clicked
  const [boardFormStatus, setBoardFormStatus] = useState("hidden");
  const toggleBoardForm = () => {
    if (!boardFormStatus) {
      setBoardFormStatus("hidden");
    } else {
      setBoardFormStatus("");
    }
  };

  // hides card form when no board is selected
  const [cardFormStatus, setCardFormStatus] = useState("hidden");
  useEffect(() => {
    if (!currentBoard.title) {
      setCardFormStatus("hidden");
    } else {
      setCardFormStatus("");
    }
  }, [currentBoard]);

  return (
    <div className="App">
      {/* Side bar which contains website title, board list, and creat board form */}

      <div id="sidebar">
        <div id="logo">
          <img
            src={require("./assets/burn-book-logo.jpeg")}
            alt="logo"
            width="100%"
          ></img>
        </div>

        {/* board menu contains board select and drop down create board form */}
        <div id="board-menu">
          <nav id="board-list">
            <BoardList boards={boards} onSelect={selectBoard} />
          </nav>

          <div>
            <button type="button" onClick={toggleBoardForm}>
              Arrow
            </button>
          </div>

          <div className={boardFormStatus} id="board-form">
            <BoardForm createBoard={createBoard} />
          </div>
        </div>
      </div>

      <div id="main-display">
        {/* header displays currently selected board name and any error messages */}
        <div id="header">
          <div id="title-container">
            <h1 id="title">{currentBoard.title}</h1>
          </div>
          <p id="error-msg">{error}</p>
        </div>

        {/* card menu contains cards for selected board and form to add a new card */}
        <div id="card-menu">
          <div id="card-wall">
            <CardWall cards={currentBoard.cards} />
          </div>
          <div className={cardFormStatus} id="card-form">
            <CardForm createCard={createCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
