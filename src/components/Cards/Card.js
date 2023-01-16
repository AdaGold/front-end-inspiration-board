//card component
import React, { useState } from "react";
import "./Card.css";
import axios from "axios";


const Card = (props) => {
  const [cardLikes, setCardLikes] = useState();

  // I outlined the likeCard and deleteCard functions and their associated buttons (bottom of page). Both likeCard and deleteCard need to connect with axios in order to function. The code for likeCard is placeholder code that I used to make sure the like button was rendering.
  const likeCard = (event) => {
    setCardLikes(event.target.value);
  };
  //   axios.patch('${process.env.REACT_APP_BACKEND_URL}/cards')
  // }
// This need to be finished so tht it deletes cards and updates w/ axios
    // const deleteCard = (event) => {
    // }



  return (
    <div className='cards-container'>
      {props.savedCardMessages.map((message) => {
        console.log(props.savedCardMessages);
        return (
          <div className='card'>
            <div className='body'>
              <p className='text'>{message}</p>
              <button onClick={likeCard}>Like Card</button> 
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;


//  The following code is the button for deleting a card. I need to complete the delete card component above for it to work. Once the delete card function is finished, we can add this part to the return statement (under the like button)

// add new div for delete
{/* <div className="delete-card">
  <button onClick={deleteCard}>Delete Card</button>
</div> */}



