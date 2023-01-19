import React, { useState } from "react";
import "./CardSection.css";
import CreateNewCard from "./CreateNewCard";
import Card from "./Card";
//card section should be container component 
//provide data for card.js
//communicates which cards should be displayed
function CardSection() {
  //defines use state
  const [savedCardMessages, setSavedCardMessages] = useState([]);
  const cardMessagesDisplay = (message) => {
    //takes in previous state of savedCardMessages as an argument
    // sets the new state to be the previous state with the new "message" added to it, using the spread operator
    // The final value of the state is an array that contains all the previous elements of the state and the new "message" element.
    setSavedCardMessages((prev) => {
      return [...prev, message];
    });
  };
  //figure out which cards are in database and send data to props
  return (
    <>
      <CreateNewCard cardMessagesDisplay={cardMessagesDisplay} />
      {/* //make cards based off what is in database */}
      <Card savedCardMessages={savedCardMessages} /> 
    </>
  );
}

export default CardSection;
