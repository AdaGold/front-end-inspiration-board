import { useState } from "react";
import SelectBoard from "./SelectBoard";
import './CreateNewBoard.css'
//user actions
const CreateNewBoard = (props) => {
  //add and set board title=--need to check for valid input
  //add and set board owner--need to check for valid input


  // NOTE FROM TIFFANY- Changed the code below to start with validTitle and validOwner as false

  // const [validTitle, setValidTitle] = useState(true);
  // const [validOwner, setValidOwner] = useState(true);

  const [boardTitle, setBoardTitle] = useState("");
  const [validTitle, setValidTitle] = useState(false);
  const [boardOwner, setBoardOwner] = useState("");
  const [validOwner, setValidOwner] = useState(false);
  //States for adding/saving the title and owner when the form is submitted
  const [savedTitles, setSavedTitles] = useState([])
  const [savedOwners, setSavedOwners] = useState([])

  // TIFFANY'S NOTE - I changed the below code and set the state to true instead of false. I did
  // this so that the Create a new Board component is displayed when the user first loads the website.
  // Anytime a user reloads the site, or leaves and comes back the create a new board component 
  //will be visible by default.

  // const [showForm, setShowForm] = useState(false);
  const [showForm, setShowForm] = useState(true);

  //change in board form title
  //if board title input is valid (validate by length of input?) then set board title
  const handleBoardTitle = (event) => {
    // console.log("Added a title");


    setBoardTitle(event.target.value);

    if (event.target.value.length > 0) {
      setValidTitle(true);
      // NOTE FROM TIFFANY- Added this else statement to cover the condition in which the user
      // starts to type a title, but then deletes their characters/title and tries to submit the 
      // form anyways. 
    }else setValidTitle(false)
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


    // console.log("Added an Owner");
    if (event.target.value.length > 0) {
      setValidOwner(true);
       // NOTE FROM TIFFANY  - Added this else statement to cover the condition in which the user
      // starts to type the owner name, but then deletes their characters/owner name 
      // and tries to submit the form.
    } else setValidOwner(false)
  };

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
  // };

  // NOTE FROM TIFFANY - Commented out above code and refactored it to the snippet below.
  // Validation state does not need to be managed in the handleSubmit function because it is already
  // being handled in the handleBoardOwner function and the handleBoardTitle function. 
  const handleSubmit = (event) => {
    if (validTitle === true && validOwner === true) {
      console.log("Title is set!");
      // Saves the value typed in the board title input, and adds it with all previous titles
      setSavedTitles((prev) => {
        return [...prev, boardTitle]
      })
    
    if (validOwner === true) {
      console.log("Board owner is set!");
       // Saves the value typed in the board owner input, and adds it with all previous owners
      setSavedOwners((prev) => {
        return [...prev, boardOwner]
      })
    } 
    setBoardTitle("")
    setBoardOwner("")
  } else alert('ERROR: Please input at least one character in both fields before submitting')

    event.preventDefault() 
  };

  if (showForm === true) {
    return (
      <div className="create-new-board-container">
        <div>
        <h2 className="create-board-header">Create A New Board</h2>
        <form className="add-board-form" onSubmit={handleSubmit}>
          <label>Owner:</label>
          <input
            type="text"
            placeholder="enter name"
            name="Owner"
            value={boardOwner}
            onChange={handleBoardOwner}
          />
          <label>Title:</label>
          <input
            type="text"
            placeholder="enter title"
            title="title"
            value={boardTitle}
            onChange={handleBoardTitle}
          />     

          {/* NOTE FROM TIFFANY - Deleted all the  <br> tags and instead created a css sheet
           and implemented flex box*/}

          <button className="new-board-sub-button">Submit Board</button> 
          {/* <button type="submit">Submit</button> */}
          <button className="hide-board" onClick={() => setShowForm(false)}>
            Hide
          </button>
          {/* <button className="show-board" onClick={() => setShowForm(true)}>
          Show
        </button> */}
        </form>
        </div>
        {/* NOTE FROM TIFFANY - Adding the SelectBoard component here as a child to 
        the CreateNewBoard component so that we can pass props from CreateNewBoard to SelectBoard
        */}
        <div>
        <SelectBoard ownerNames={savedOwners} boardTitles={savedTitles}/>
        </div>
      </div>
    );
  } else {
    return (
      <button className="show-board" onClick={() => setShowForm(true)}>
        Create New Board
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
