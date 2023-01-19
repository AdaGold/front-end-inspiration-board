// import React, { useState } from "react";
// import CreateNewCard from "./CreateNewCard";
import Card from "./Card";


const CardSection = () => {
  

  // get our card data and put it in a list of object with message and likes_count
  // for now, cardData is arbitrary. connect to database later
  const cardData = [
    {
      message: "Caitlyn's test message 1",
      likes_count: 0
    },
    {
      message: "Caitlyn's test message 2",
      likes_count: 5
    }
  ]

  // map each pieve of card data into an array of list items
  const cardComponents = cardData.map(card => {
    return (
      <li><Card message={card.message} likes_count={card.likes_count}></Card></li>
    );
  });

  // access the array and return to App as a full card section
  return (
    <section className="cards-container">
      {cardComponents}
    </section>
  );
};




export default CardSection;
