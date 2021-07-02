import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./card.css"

const Card = (props) => {

    // state: passed back to board?
    // number of upvotes
    // delete
    

    return (
        <div className='card' id={props.card_id}>
            <div className='card__content'>
                <p className='card__content-text'>{props.text}</p>
                <p> Likes: {props.likes}</p>
                <button>Add Like</button>
            </div>
            <div className='card__delete'>
                <button className='card__delete-button'
                onClick={() => props.deleteCard(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

Card.propTypes = {
        id: PropTypes.number,
        text: PropTypes.string,
        deleteCard: PropTypes.func.isRequired,
}


export default Card;