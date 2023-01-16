import React, { useState } from "react";
import "./CreateNewCard.css";


const CreateNewCard = (props)  => {

  const [cardMessage, setCardMessage] = useState("");

  const cardMessageHandler = (event) => {
    setCardMessage(event.target.value);
  };
// This is the same code you wrote starting on line 40 but I added the first few lines to check the length of the message to make sure it is greater than 0 characters and less than 40
  const submitCard = (e) => {
    if (cardMessage.length === 0 || cardMessage.length > 40) {
      alert("Card must be over one character and less than 40 characters")
    } else {
      e.preventDefault();
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
        {/* I added setCardMessage("") on line 19 so that it is clears after its submitted.  */}
        {/* I added the functon submitCard on line 13 to incorporate the length conditionals. We can use the code on line 40 and add the conditional there but I was struggling to keep it organized and concise. I didn't change anything, only commented it out so its still fully functional.  */}
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
}

export default CreateNewCard;

// This code was on line 30 but was commented out. I moved it here to remove clutter while I was working on it but we can move it back if needed. 

{/* <label for='new-card-input' style={{ alignSelf: "center" }}>
          Message
        </label> */}