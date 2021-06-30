//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React, {useState} from 'react';
const axios = require('axios');

// change to initiate brownout, test 2

export const Card = (props) => {

    const [cardLikes, setCardLikes] = useState(props.likescount)

    const handleClick = () => {
        props.callBack(props.id)
        setCardLikes(cardLikes + 1)
    }

    return <section className="card">
        <p>{props.message}</p>
        <p>likes: {cardLikes}</p>
        <p onClick={handleClick} className="likeButton">💕</p>
        <p className="deleteButton">🗑</p>
    </section>
};