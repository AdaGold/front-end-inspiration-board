// import React, { useState } from "react";
// import SelectBoard from "./SelectBoard";
// import "./CreateNewBoard.css";
// import App from "../../App";
// //user actions
// const CreateNewBoard = () => {
//   const [boardTitle, setBoardTitle] = useState("");
//   // const [validTitle, setValidTitle] = useState(false);
//   const [boardOwner, setBoardOwner] = useState("");
//   // const [validOwner, setValidOwner] = useState(false);
//   // const [savedTitles, setSavedTitles] = useState([]);
//   // const [savedOwners, setSavedOwners] = useState([]);

//   // TIFFANY'S NOTE - I changed the below code and set the state to true instead of false. I did
//   // this so that the Create a new Board component is displayed when the user first loads the website.
// // this should be in App.js
//   const [showForm, setShowForm] = useState(true);

//   //change in board form title
//   const handleBoardTitle = (event) => {
//     setBoardTitle(event.target.value);
//     if (event.target.value.length > 0) {
//       setValidTitle(true);
//     } else setValidTitle(false);
//   };
  
//   //change in board form owner input
//   const handleBoardOwner = (event) => {
//     setBoardOwner(event.target.value);
//     if (event.target.value.length > 0) {
//       setValidOwner(true);
//     } else setValidOwner(false);
//   };

 
//   // NOTE FROM TIFFANY - Commented out above code and refactored it to the snippet below.
//   // Validation state does not need to be managed in the handleSubmit function because it is already
//   // being handled in the handleBoardOwner function and the handleBoardTitle function.
//   const handleSubmit = (event) => {
//     // if (validTitle === true && validOwner === true) {
//     //   console.log("Title is set!");
//     //   // Saves the value typed in the board title input, and adds it with all previous titles
//     //   setSavedTitles((prev) => {
//     //     return [...prev, boardTitle];
//     //   });
      
//     //   if (validOwner === true) {
//     //     console.log("Board owner is set!");
//     //     // Saves the value typed in the board owner input, and adds it with all previous owners
//     //     setSavedOwners((prev) => {
//     //       return [...prev, boardOwner];
//     //     });
//     //   }
//       event.preventDefault();
//       props.createNewForm({title, owner})
//       setBoardTitle("");
//       setBoardOwner("");
//     // } else
//     //   alert(
//     //     "ERROR: Please input at least one character in both fields before submitting"
//     //   );
//   };
// // handle state of showing form should not be done in the form, should be in App.js
//   // if (showForm === true) {
//     return (
//       <div className='create-new-board-container'>
//         <div className='form-container'>
//           <h2 className='create-board-header'>Create a New Board</h2>
//           <form className='add-board-form' onSubmit={handleSubmit}>
//             <label>Owner:</label>
//             <input
//               type='text'
//               placeholder='Enter Name'
//               name='Owner'
//               value={boardOwner}
//               onChange={handleBoardOwner}
//             />
//             <label>Title:</label>
//             <input
//               type='text'
//               placeholder='Enter Title'
//               title='title'
//               value={boardTitle}
//               onChange={handleBoardTitle}
//             />
//             <button className='new-board-sub-button'>Submit Board</button>
//             <button className='hide-board' onClick={() => setShowForm(false)}>
//               Hide
//             </button>
//           </form>
//         </div>
//         {/* NOTE FROM TIFFANY - Adding the SelectBoard component here as a child to 
//         the CreateNewBoard component so that we can pass props from CreateNewBoard to SelectBoard
//         */}
//         <div>
//           <SelectBoard ownerNames={savedOwners} boardTitles={savedTitles} />
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <button className='show-board' onClick={() => setShowForm(true)}>
//         Create a New Board
//       </button>
//     );
//   }
// };

// export default CreateNewBoard;



  //if setBoardTitle &/or setBoardOwner are invalid (false?): (add function for checking valid title and owner)
  //disable submit button
