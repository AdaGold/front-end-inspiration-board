import React, { useState } from "react";
// import CreateNewCard from "./CreateNewCard";
import Card from "./Card";
import axios from "axios";


const CardSection = (props) => {
  
  // set state to be able to access cards from database in component without...
  // needing to work with complicated async issues
  const [cardsInBoard, setCardsInBoard] = useState([]);


  // once we have the board set up, 
  // move this to app so we can call this function on events
  // (right now, we're calling it constantly)
  // then we can change the props to be the card list
  const getCardsByBoardId = () => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board_id}/cards`)
    .then((response) => {
      let cards = []
      for (let card of response.data.cards) {
        cards.push({
          "message": card.message,
          "likes_count": card.likes_count
        })
      }
      setCardsInBoard(cards)
    })
  }


  // call axios to update state with card data
  getCardsByBoardId()


  // map each piece of card data into an array of list items
  const cardComponents = cardsInBoard.map(card => {
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
