import React, { useState } from "react";
import "./CardSection.css";
import CreateNewCard from "./CreateNewCard";
import Card from "./Card";


function CardSection() {
  const [savedCardMessages, setSavedCardMessages] = useState([]);
  const cardMessagesDisplay = (message) => {
    setSavedCardMessages((prev) => {
      return [...prev, message];
    });
  };

  return (
    <>
      <CreateNewCard cardMessagesDisplay={cardMessagesDisplay} />
      <Card savedCardMessages={savedCardMessages} />
    </>
  );
}

export default CardSection;



// I think we need something like this in one of the card components

{/* <Card
key={card.card_id}
increaseLikes={increaseLikes}
card={card}
deleteCard={deleteCard}
/> */}