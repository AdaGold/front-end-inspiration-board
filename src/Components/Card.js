import "./Card.css";
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="cards">
      <li>
        <div>{props.message}</div>
        <div> 💕{props.likes}</div>
        <button>+1</button>
        <button className="tasks__item__remove button">Delete</button>
      </li>
    </div>
  );
};

// Card.propTypes = {
// id: PropTypes.number.isRequired,
// message: PropTypes.string.isRequired,
// likes: PropTypes.number.isRequired,
// };

export default Card;
