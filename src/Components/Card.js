import "./Card.css";
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <li>
      <div>{props.message}</div>
      <div> 💕{props.likes}</div>
      <button onClick={() => props.updateLikes(props)}>+1</button>
      <button
        className="tasks__item__remove button"
        onClick={() => props.deleteCard(props)}
      >
        Delete
      </button>
    </li>
  );
};

// Card.propTypes = {
// id: PropTypes.number.isRequired,
// message: PropTypes.string.isRequired,
// likes: PropTypes.number.isRequired,
// };

export default Card;
