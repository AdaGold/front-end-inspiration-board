import React, { useState } from "react";
import SelectBoard from "./SelectBoard";
import "./CreateNewBoard.css";
//user actions
const CreateNewBoard = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const [validTitle, setValidTitle] = useState(false);
  const [boardOwner, setBoardOwner] = useState("");
  const [validOwner, setValidOwner] = useState(false);
  //States for adding/saving the title and owner when the form is submitted
  const [savedTitles, setSavedTitles] = useState([]);
  const [savedOwners, setSavedOwners] = useState([]);

  // TIFFANY'S NOTE - I changed the below code and set the state to true instead of false. I did
  // this so that the Create a new Board component is displayed when the user first loads the website.
  // Anytime a user reloads the site, or leaves and comes back the create a new board component
  //will be visible by default.

  const [showForm, setShowForm] = useState(true);

  //change in board form title
  const handleBoardTitle = (event) => {
    setBoardTitle(event.target.value);
    if (event.target.value.length > 0) {
      setValidTitle(true);
      // NOTE FROM TIFFANY- Added this else statement to cover the condition in which the user
      // starts to type a title, but then deletes their characters/title and tries to submit the
      // form anyways.
    } else setValidTitle(false);
  };
  
  //change in board form owner input
  //if board form input is valid (validate by length of input) then set board owner
  const handleBoardOwner = (event) => {
    setBoardOwner(event.target.value);
    if (event.target.value.length > 0) {
      setValidOwner(true);
      // NOTE FROM TIFFANY  - Added this else statement to cover the condition in which the user
      // starts to type the owner name, but then deletes their characters/owner name
    } else setValidOwner(false);
  };

  // NOTE FROM TIFFANY - Commented out above code and refactored it to the snippet below.
  // Validation state does not need to be managed in the handleSubmit function because it is already
  // being handled in the handleBoardOwner function and the handleBoardTitle function.
  const handleSubmit = (event) => {
    if (validTitle === true && validOwner === true) {
      console.log("Title is set!");
      // Saves the value typed in the board title input, and adds it with all previous titles
      setSavedTitles((prev) => {
        return [...prev, boardTitle];
      });
      
      if (validOwner === true) {
        console.log("Board owner is set!");
        // Saves the value typed in the board owner input, and adds it with all previous owners
        setSavedOwners((prev) => {
          return [...prev, boardOwner];
        });
      }
      setBoardTitle("");
      setBoardOwner("");
    } else
      alert(
        "ERROR: Please input at least one character in both fields before submitting"
      );

    event.preventDefault();
  };

  if (showForm === true) {
    return (
      <div className='create-new-board-container'>
        <div className='form-container'>
          <h2 className='create-board-header'>Create a New Board</h2>
          <form className='add-board-form' onSubmit={handleSubmit}>
            <label>Owner:</label>
            <input
              type='text'
              placeholder='Enter Name'
              name='Owner'
              value={boardOwner}
              onChange={handleBoardOwner}
            />
            <label>Title:</label>
            <input
              type='text'
              placeholder='Enter Title'
              title='title'
              value={boardTitle}
              onChange={handleBoardTitle}
            />
            <button className='new-board-sub-button'>Submit Board</button>
            <button className='hide-board' onClick={() => setShowForm(false)}>
              Hide
            </button>
          </form>
        </div>
        {/* NOTE FROM TIFFANY - Adding the SelectBoard component here as a child to 
        the CreateNewBoard component so that we can pass props from CreateNewBoard to SelectBoard
        */}
        <div>
          <SelectBoard ownerNames={savedOwners} boardTitles={savedTitles} />
        </div>
      </div>
    );
  } else {
    return (
      <button className='show-board' onClick={() => setShowForm(true)}>
        Create a New Board
      </button>
    );
  }
};

export default CreateNewBoard;


   //submit new board form UPDATE TO REFLECT ONCHANGE
  //if setBoardTitle &/or setBoardOwner are invalid (false?): (add function for checking valid title and owner)
  //disable submit button
  //allow submit form button to be clicked and trigger click event

  // const handleSubmit = (event) => {
  //   if (boardTitle.length > 0) {
  //     setValidTitle(true);
  //     console.log("Title is set!");
  //   } else if (boardTitle.length === 0) {
  //     setValidTitle(false);
  //   }
  //   if (boardOwner.length > 0) {
  //     setValidOwner(true);
  //     console.log("Board owner is set!");
  //   } else if (boardOwner.length === 0) {
  //     setBoardOwner(false);
  //   }

  //   event.preventDefault()