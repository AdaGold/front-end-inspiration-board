/* eslint-disable no-template-curly-in-string */
//card component
import React, { useState } from "react";
import "./Card.css";
import axios from "axios";


const Card = (props) => {
  
  const [cardLikes, setCardLikes] = useState();

  // When like card button is clicked, like card should be called, and increase like count should be called, and likesCount should be updated
  // const likeCard = () => {
  // axios.patch('${process.env.REACT_APP_BACKEND_URL}/cards/card_id')
  // .then((response) => { 
  //   console.log("Card Liked");
  // })
  // .catch((error) => {
  //   console.log(error);
  //   console.log(error.response);
  // })
  // };

// //   const [likesCount, setLikesCount] = useState(0);
// //   const increaseLikes = () => {
// //     console.log('Like Count Increased!');
// //     setLikesCount(likesCount + 1);
// // };

  // }
  // This need to be finished so tht it deletes cards and updates w/ axios
  // const deleteCard = () => {
  //   // eslint-disable-next-line no-template-curly-in-string
  //   axios.delete('${process.env.REACT_APP_BACKEND_URL}/cards/card_id')
  //   .then((response) => {
  //     console.log("Card deleted")
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     console.log(error.response);
  //   })
  // };

  return (
    <div className="cards-container">
      {props.savedCardMessages.map((message) => {
        console.log(props.savedCardMessages);
        return (
          <div className="card">
            <div className="body">
              <p className="text">{message}</p>
              <p>Number of likes:add the likes count here </p>
              {/* <button onClick={() => {likeCard()}}> */}
                {/* Like Card</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

//  The following code is the button for deleting a card. I need to complete the delete card component above for it to work. Once the delete card function is finished, we can add this part to the return statement (under the like button)

// add new div for delete
{
  /* <div className="delete-card">
  <button onClick={deleteCard}>Delete Card</button>
</div> */
}
