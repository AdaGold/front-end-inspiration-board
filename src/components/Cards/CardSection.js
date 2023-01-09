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
