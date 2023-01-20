import React, { useState } from "react";
// import CreateNewCard from "./CreateNewCard";
import Card from "./Card";
import axios from "axios";


const CardSection = (props) => {
  
  // map each piece of card data into an array of list items
  const cardComponents = props.cards.map(card => {
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
