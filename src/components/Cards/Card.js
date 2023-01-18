/* eslint-disable no-template-curly-in-string */
//card component
import React, { useState } from "react";
import "./Card.css";
import axios from "axios";

//I added the likeCard and deleteCards functions and created a function for increaseLikes. It will be a part of addLike. I removed it to work on getting addLike to work with requests.
//We can move both likeCard and deleteCard into App.js if we want to reduce code here.

const Card = (props) => {

  const addLike = () => {
    axios.patch('${process.env.REACT_APP_BACKEND_URL}/cards/<card_id>')
    .then((response) => { 
      console.log("Card Liked");
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response);
    })
    };
  
  // //   const [likesCount, setLikesCount] = useState(0);
  // //   const increaseLikes = () => {
  // //     console.log('Like Count Increased!');
  // //     setLikesCount(likesCount + 1);
  // // };
  
//function to delete a card, works with delete card button, onClick event in return statement
    const deleteCard = () => {
      axios.delete('${process.env.REACT_APP_BACKEND_URL}/cards/<card_id>')
      .then((response) => {
        console.log("Card deleted")
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      })
    };
  
  return (
    <div className="cards-container">
      {props.savedCardMessages.map((message) => {
        console.log(props.savedCardMessages);
        return (
          <div className="card">
            <div className="body">
              <p className="text">{message}</p>
              <p>Number of likes:add the likes count here </p>
              <button onClick={addLike}>🖤 </button>
              <button onClick={deleteCard}>Delete Card</button>
                
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;


