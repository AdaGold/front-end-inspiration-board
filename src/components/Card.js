// import PropTypes from "prop-types";

const Card = (props) => {

  const deleteButton = 'delete';

  const cardText = 'Text'

  const likesButton = 'likes';

  const likesCount = 'likes number';

  return(
    <div className='card'>
      <p>{deleteButton}</p>
      <h2>{cardText}</h2>
      <p>{likesButton}</p>
      <p>{likesCount}</p>
    </div>
  )
};

// Card.propTypes = {
//   allCards: PropTypes.array.isRequired
// };

export default Card;