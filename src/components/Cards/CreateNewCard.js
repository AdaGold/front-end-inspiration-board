import React, { useState } from "react";
import "./CreateNewCard.css";

//takes in props, initialize variable as empty string, declares cardMessageHandler (event handler)
const CreateNewCard = (props) => {
  const [cardMessage, setCardMessage] = useState("");
  const cardMessageHandler = (event) => {
    setCardMessage(event.target.value);
  };

//Can also be moved to axios post card request when it is completed
  const submitCard = (event) => {
    event.preventDefault();
    if (cardMessage.length < 1 || cardMessage.length > 40) {
      alert("Enter valid card information to submit a card. A valid card must have between one and forty characters and cannot include only whitespaces.");
    } else {
      // const newCard = {
      //   message: cardMessage,
      // }
    
      props.onSubmitCard(cardMessage)
      setCardMessage("");
    }
  }
  
  return (
    <div>
      <h1 id="new-card-section-header">Create a New Card</h1>
      <form className="new-card-form" onSubmit={submitCard}>
        <input
          id="new-card-input"
          placeholder="Type Message"
          type="text"
          value={cardMessage}
          onChange={cardMessageHandler}
        />
        <button className="btn-submit">Submit Card</button>
      </form>
    </div>
  );
};

export default CreateNewCard;



