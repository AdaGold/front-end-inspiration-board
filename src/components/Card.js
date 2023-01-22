import { useState } from "react";
// import PropTypes from "prop-types";

const Card = (props) => {

  const deleteButton = 'delete';

  const cardText = 'Text'

  let [likesCount, setLikesCount] = useState(0);
  
  const likesButton = () => {
    likesCount = likesCount + 1;
    setLikesCount(likesCount);
  };

  return(
    <div className='card'>
      <p>{deleteButton}</p>
      <h2>{cardText}</h2>
      <button onClick={likesButton}>Like</button>
      <p>{likesCount}</p>
    </div>
  )
};

export default Card;
// Card.propTypes = {
//   allCards: PropTypes.array.isRequired
// };
