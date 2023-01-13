//card component
import React from "react";
import "./Card.css";
function Card(props) {
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
