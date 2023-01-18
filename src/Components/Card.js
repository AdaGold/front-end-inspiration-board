import "../styles/Card.css";
import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <li>
            <div>
                {props.message}
            </ div>
            <button>
                {props.likes}
            </button>
            <button
            className="tasks__item__remove button"
            >
            x
            </button>
        </li>
    );
};

Card.propTypes = {
id: PropTypes.number.isRequired,
message: PropTypes.string.isRequired,
likes: PropTypes.number.isRequired,
};