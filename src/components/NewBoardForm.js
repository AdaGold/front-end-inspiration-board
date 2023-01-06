import { useState } from "react";

//user actions
const CreateNewBoard = (props) => {
  //add and set board title=--need to check for valid input
  const [boardTitle, setBoardTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  //add and set board owner--need to check for valid input
  const [boardOwner, setBoardOwner] = useState("");

  //add new board to boards list//create a new component for updating boards list ??
  function addToBoardsList() {
    console.log("New Board Added To List!");
  }

  //clear text boxes once submitted
  //if board owner and title are valid and submit button is clicked than update text boes
  function clearTextBoxes() {
    console.log("Clear Text Boxes");
  }

  //change in board form title
  //if board title input is valid (validate by length of input?) then set board title
  const handleBoardTitle = (event) => {
    setBoardTitle(event.target.value);
    if (event.target.value.length > 0) {
      setValidTitle(true);
    }
    console.log("Added Board Form title");
  };

  //change in board form owner input
  //if board form input is valid (validate by length of input) then set board owner
  const handleBoardOwner = (event) => {
    setBoardOwner(event.target.value);
    console.log("Added an Owner");
  };

  //submit new board form UPDATE TO REFLECT ONCHANGE
  const handleSubmit = (event) => {
    if (boardTitle.length > 0) {
      setValidTitle(true);
      console.log("Create New Board");
    } else if (boardTitle.length === 0) {
      setValidTitle(false);
    }
  };

  //if setBoardTitle &/or setBoardOwner are invalid (false?): (add function for checking valid title and owner)
  //disable submit button
  //if setBoardTitle $ setBoardOwner are valid (true?):
  //allow submit form button to be clicked and trigger click event

  return (
    <div className="create-new-board">
      <h2>Create A New Board</h2>
<<<<<<< Updated upstream
      <form className="add-board">
        <label>Owner:</label>
        <input type="text" placeholder="enter name" name="owner" />
=======
      <form className="add-board-form" onSubmit={handleSubmit}>
        <button className="test--only">Click Me</button>
        <label>Owner:</label>
        <input
          type="text"
          placeholder="enter name"
          name="Owner"
          value={boardOwner}
          onChange={handleBoardOwner}
        />
>>>>>>> Stashed changes
        <br />
        <br />
        <label>Title:</label>
        <input
          type="text"
          placeholder="enter title"
          title="title"
          value={boardTitle}
          onChange={handleBoardTitle}
        />
        <br />
        <br />
<<<<<<< Updated upstream
        <input type="submit" className="new-board-sub-button"></input>
        {/* <button onClick={handleClick}>Submit</button> */}
        {/* <input type="Submit" className="new-board-sub-buttn"></input> */}
        <button onClick={handleSubmit}>Submit</button>
=======
        <input type="Submit" className="new-board-sub-buttn"></input>
>>>>>>> Stashed changes
      </form>
      <br />
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <br />
<<<<<<< Updated upstream
      <span className="hide-board-toggle">Hide New Board Form</span>
=======
      <br />
      <button className="hide-board-toggle">Hide Board Form</button>
>>>>>>> Stashed changes
    </div>
  );
};

export default CreateNewBoard;
