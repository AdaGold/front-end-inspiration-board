import React from 'react';
import '../App.css';


const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-child'>
                <p>{props.card.message}</p>
                <p>{props.card.likes_count} 🐼</p>
            </div>
        </div>
    )
}

export default Card;