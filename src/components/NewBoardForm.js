import React from "react";
//user actions
const CreateNewBoard = (props) => {
  //submit new board form UPDATE TO REFLECT ONCHANGE
  function handleClick() {
    console.log("Create New Board");
  }
  //add new board to boards list
  function addToBoardsList() {
    console.log("New Board Added To List!");
  }

  //clear text boxes once submitted
  function clearTextBoxes() {
    console.log("Clear Text Boxes");
  }

  //change in board form title
  function boardFormTitle() {
    console.log("Added Board Form title");
  }

  //change in board form owner
  function boardFormOwner() {
    console.log("Added an Owner");
  }

  return (
    <div className="create-new-board">
      <h2>Create A New Board</h2>
      <form class="add-board">
        <label>Owner:</label>
        <input type="text" placeholder="enter name" name="Owner" />
        <br />
        <br />
        <label>Title:</label>
        <input type="text" placeholder="enter title" title="title" />
        <br />
        <br />
        <input type="Submit" className="new-board-sub-buttn"></input>
        {/* <button onClick={handleClick}>Submit</button> */}
      </form>
      <br />
      <br />
      <span class="hide-board-toggle">Hide New Board Form</span>
    </div>
  );
};

export default CreateNewBoard;
