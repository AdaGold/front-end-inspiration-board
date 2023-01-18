/* eslint-disable no-template-curly-in-string */
//card component
import React, { useState } from "react";
import "./Card.css";
import axios from "axios";


const Card = (props) => {

  const likeCard = () => {
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
  

    const deleteCard = () => {
      axios.delete('${process.env.REACT_APP_BACKEND_URL}/cards/card_id')
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
              <button onClick={likeCard}>🖤 </button>
              <button onClick={deleteCard}>Delete Card</button>
                
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;


