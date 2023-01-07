import { useState } from "react";

//user actions
const CreateNewBoard = (props) => {
  //add and set board title=--need to check for valid input
  //add and set board owner--need to check for valid input
  const [boardTitle, setBoardTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  const [boardOwner, setBoardOwner] = useState("");
  const [validOwner, setValidOwner] = useState(true);
  const [showForm, setShowForm] = useState(false);

  //change in board form title
  //if board title input is valid (validate by length of input?) then set board title
  const handleBoardTitle = (event) => {
    console.log("Added a title");
    setBoardTitle(event.target.value);
    if (event.target.value.length > 0) {
      setValidTitle(true);
    }
  };

  // const handleShowForm = (event) => {
  // const onClick = () => setShowForm(true);
  // return (
  //   <div>
  //     <input type="submit" value="Search" onClick={onClick} />
  //     { showForm ? <Results /> : null }
  //   </div>
  // )}

  //change in board form owner input
  //if board form input is valid (validate by length of input) then set board owner
  const handleBoardOwner = (event) => {
    setBoardOwner(event.target.value);
    console.log("Added an Owner");
    if (event.target.value.length > 0) {
      setValidOwner(true);
    }
  };

  //submit new board form UPDATE TO REFLECT ONCHANGE
  //if setBoardTitle &/or setBoardOwner are invalid (false?): (add function for checking valid title and owner)
  //disable submit button
  //allow submit form button to be clicked and trigger click event

  const handleSubmit = (event) => {
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
      <div className="create-new-board">
        <h2>Create A New Board</h2>
        <form className="add-board-form" onSubmit={handleSubmit}>
          <label>Owner:</label>
          <input
            type="text"
            placeholder="enter name"
            name="Owner"
            value={boardOwner}
            onChange={handleBoardOwner}
          />
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
          <input type="Submit" className="new-board-sub-buttn"></input>
          <br />
          {/* <button type="submit">Submit</button> */}
          <br />
          <br />
          <button className="hide-board" onClick={() => setShowForm(false)}>
            Hide
          </button>
          {/* <button className="show-board" onClick={() => setShowForm(true)}>
          Show
        </button> */}
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

// //add new board to boards list//create a new component for updating boards list ??
// function addToBoardsList() {
//   console.log("New Board Added To List!");
// }

// //clear text boxes once submitted
// //if board owner and title are valid and submit button is clicked than update text boes
// function clearTextBoxes() {
//   console.log("Clear Text Boxes");
// }
