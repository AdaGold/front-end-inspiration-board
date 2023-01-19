// import React, { useState } from "react";
import "./Card.css";
// import axios from "axios";


const Card = (props) => {

  // const addLike = () => {
  //   // changed hash type
  //   axios.patch(`${process.env.REACT_APP_BACKEND_URL}/cards/<card_id>`)
  //   .then((response) => {
  //     console.log("Card Liked");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     console.log(error.response);
  //   })
  //   };
  
//function to delete a card, works with delete card button, onClick event in return statement
    // const deleteCard = () => {
    //   axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/1`)
    //   .then((response) => {
    //     console.log("Card deleted")
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log(error.response);
    //   })
    // };

    // deleteCard()

  // function to disable the ability to submit a card if there are no boards created and prompt the user to first create a board
  // const enabled = 
  
  return (
    <div className="card">
      <div className="body">
        <p className="text">Message: {props.message}</p>
        <p>Number of likes: {props.likes_count}</p>
        <button>🖤</button>
        <button>Delete Card</button>
      </div>
    </div>
  )
  }
  
//   return (
//     <div className="cards-container">
//       {props.savedCardMessages.map((message) => {
//         console.log(props.savedCardMessages);
//         return (
//           <div className="card">
//             <div className="body">
//               <p className="text">{message}</p>
//               <p>Number of likes:add the likes count here </p>
//               {/* <button onClick={addLike}>🖤 </button>
//               <button onClick={deleteCard}>Delete Card</button> */}
//               <button>🖤 </button>
//               <button>Delete Card</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Card;
