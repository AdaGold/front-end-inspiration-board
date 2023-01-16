//card component
import React, { useState } from "react";
import "./Card.css";
import axios from "axios";

// I changes this by adding line 7 and the fullowing code to build the like function
const Card = (props) => {
  const [cardLikes, setCardLikes] = useState();

  // This needs to be finished to update w/ axios, 
  // const likeCard = () => {
  // }
// This need to be finished so tht it deletes cards and updates w/ axios
  // const deleteCard = () => {
  // }




  return (
    <div className='cards-container'>
      {props.savedCardMessages.map((message) => {
        console.log(props.savedCardMessages);
        return (
          <div className='card'>
            <div className='body'>
              <p className='text'>{message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default Card;


//the code below are the buttons for liking and deleting a card. I did not add them to the above code because we have to finish building out the functions for deleting and liking a card, which need to use axios.

//add this to the card div
{/* <div className='card-likes'>Like: {props.card.likes}</div> */}
{/* <button onClick={likeCard}>Like Card</button>  */}

// add new div for delete

{/* <div className="delete-card">
  <button onClick={deleteCard}>Delete Card</button>
</div> */}



