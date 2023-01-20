import { getAllByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";
import "./CreateNewBoard.css";


const CreateNewBoard = (props) => {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardOwner, setBoardOwner] = useState("");

  const handleBoardTitle = (event) => {
    setBoardTitle(event.target.value);
  };

  const handleBoardOwner = (event) => {
    setBoardOwner(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
      const newBoard = {
        title: boardTitle,
        owner: boardOwner,
      };

      props.onSubmitBoard(newBoard);
      setBoardTitle("");
      setBoardOwner("");
    }

  const enabled = boardTitle.length > 0 && boardOwner.length > 0;

  return (
    <div className="create-new-board-container">
      <div className="form-container">
        <h2 className="create-board-header">Create a New Board</h2>
        <form className="add-board-form" onSubmit={handleSubmit}>
          <label>Owner:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="Owner"
            value={boardOwner}
            onChange={handleBoardOwner}
          />
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter Title"
            title="title"
            value={boardTitle}
            onChange={handleBoardTitle}
          />
          <button className="new-board-sub-button" disabled={!enabled}>
            Submit Board
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBoard;
