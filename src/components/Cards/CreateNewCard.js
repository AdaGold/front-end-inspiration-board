import React, { useState } from "react";
import "./CreateNewCard.css";

const CreateNewCard = (props) => {

  const [cardMessage, setCardMessage] = useState("");
  const cardMessageHandler = (event) => {
    setCardMessage(event.target.value);
  };

  // This is the same code you wrote starting on line 40 but I added the conditional to ensure it meets the length requiremnts
  const submitCard = (event) => {
    if (cardMessage.length < 1 || cardMessage.length > 40) {
      alert("Card must be over 0 characters and less than 40 characters");
    } else {
      event.preventDefault();
      props.cardMessagesDisplay(cardMessage);
      setCardMessage("");
    }
  };

  return (
    <div>
      <h1 id="new-card-section-header">Create a New Card</h1>
      {/* should we add a onSubmit button since this is a form? */}
      <form className="new-card-form" onSubmit={submitCard}>
        <input
          id="new-card-input"
          placeholder="Type Message"
          type="text"
          value={cardMessage}
          onChange={cardMessageHandler}
        />
        {/* I added setCardMessage("") on line 18 so that it is clears after its submitted.  */}
        <button className="btn-submit">Submit Card</button>
        {/* <button
          className="btn-submit"
          onClick={(e) => {
            props.cardMessagesDisplay(cardMessage);
            e.preventDefault();
            setCardMessage("");
          }}
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default CreateNewCard;



