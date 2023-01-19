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

  // gets list of all boards and updates when one is added
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL + "/boards").catch((err) => {
        console.log(err);
      });
      setAllBoards(response.data);
    };
    getData();
  }, [boards]);

  // for BoardList - updates state to selected board + gets its cards
  const selectBoard = async (selectedBoard) => {
    const response = await axios.get(
      `${URL}/boards/${selectedBoard.board_id}/cards`
    );
    setBoard(response.data);
    setError("");
  };

  // for BoardList - creates a new board and posts it to db
  const createBoard = (newBoardData) => {
    if (newBoardData.title && newBoardData.owner) {
      setError("");
      axios
        .post(URL + "/boards", {
          title: newBoardData.title,
          owner: newBoardData.owner,
        })
        .catch((err) => {
          console.log("error creating board: " + err);
        });
    } else {
      setError("Error: Boards must have a title and an owner!");
    }
  };

  // for CardForm - creates a new card, pushes it to db, and updates state so it is rendered immediately
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
    }
  };

  // for CardWall - deletes card from database and state
  const deleteCard = (cardToDelete) => {
    const newCardList = [];
    for (const card of currentBoard.cards) {
      if (card.card_id !== cardToDelete.card_id) {
        newCardList.push(card);
      }
    }
    setBoard({ ...currentBoard, cards: newCardList });
    axios.delete(`${URL}/cards/${cardToDelete.card_id}`);
  };

  // for CardWall - adds 1 to the card's like counter in database and state
  const likeCard = (cardToLike) => {
    for (const card of currentBoard.cards) {
      if (card.card_id === cardToLike.card_id) {
        card.likes_count += 1;
      }
    }
    axios.patch(`${URL}/cards/${cardToLike.card_id}`);
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
              board form
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
            <CardWall
              cards={currentBoard.cards}
              onDelete={deleteCard}
              onLike={likeCard}
            />
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
