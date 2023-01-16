import { useState } from "react";

const CreateNewBoard = (props) => {
  const [boardTitle, setBoardTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  const [boardOwner, setBoardOwner] = useState("");
  const [validOwner, setValidOwner] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [boardInfo, setBoardInfo] = useState({
    title: "",
    owner: "",
  });

  const handleBoardChange = (event) => {
    setBoardInfo({ ...boardInfo, [event.target.name]: event.target.value });
  };

  //monitor change in board form title
  //if board title input is valid (validate by length of input?) then set board title
  const handleBoardTitle = (event) => {
    console.log("Added a title");
    setBoardTitle(event.target.value);
    if (event.target.value.length > 0) {
      setValidTitle(true);
    }
  };

  //monitor change in board form owner input
  const handleBoardOwner = (event) => {
    setBoardOwner(event.target.value);
    console.log("Added an Owner");
    if (event.target.value.length > 0) {
      setValidOwner(true);
    }
  };

  //submit new board form
  //disable submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name");
    console.log("title");
    if (boardTitle.length > 0) {
      setValidTitle(true);
      console.log("Tile is set!");
    } else if (boardTitle.length === 0) {
      setValidTitle(false);
    }
    if (boardOwner.length > 0) {
      setValidOwner(true);
      console.log("Board owner is set!");
    } else if (boardOwner.length === 0) {
      setBoardOwner(false);
    }
  };

  if (showForm === true) {
    return (
      <div className="form-container">
        <h2>Create A New Board</h2>
        <form className="submit-board-form" onSubmit={handleSubmit}>
          <div className="form-owner">
            <label>Owner:</label>
            <input
              type="text"
              placeholder="enter name"
              name="Owner"
              value={boardOwner}
              onChange={handleBoardOwner}
            />
          </div>

          <div className="form-title">
            <label>Title:</label>
            <input
              type="text"
              placeholder="enter title"
              name="title"
              value={boardTitle}
              onChange={handleBoardTitle}
            />
          </div>

          <br />
          <input type="Submit" className="new-board-submit-buttn"></input>
          <br />

          <button className="hide-board" onClick={() => setShowForm(false)}>
            Hide
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <button className="show-board" onClick={() => setShowForm(true)}>
        Show
      </button>
    );
  }
};

export default CreateNewBoard;

