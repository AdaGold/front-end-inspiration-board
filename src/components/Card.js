import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {

    return (
        <div className="card">
            <div className='card__content'>
                <p className='card__content-text'>{props.text} </p>
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
    // state: passed back to board?
    // number of upvotes
    // delete
    
    // cards passed as props or Context? 
Card.proptypes = {
        id: PropTypes.number,
        text: PropTypes.string,
        deleteCard: PropTypes.func.isRequired,
}


export default Card;