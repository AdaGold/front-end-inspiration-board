import "./Card.css";
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
<<<<<<< HEAD
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
=======
    return (
        <li>
            <div>
                {props.message}
            </ div>
            <button onClick={() => props.updateLikes(props)}>
                {props.likes}
            </button>
            <button
            className="tasks__item__remove button" 
            onClick={() => props.deleteCard(props)}
            >x
            </button>
        </li>
    );
>>>>>>> a39880fd492b85414a421142969d26cbe26c9182
};

// Card.propTypes = {
// id: PropTypes.number.isRequired,
// message: PropTypes.string.isRequired,
// likes: PropTypes.number.isRequired,
// };

export default Card;
