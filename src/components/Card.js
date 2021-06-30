//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React, {useState} from 'react';
const axios = require('axios');

export const Card = (props) => {

    const [cardLikes, setCardLikes] = useState(props.likescount)

    const likeClick = () => {
        props.likeCallBack(props.id)
        setCardLikes(cardLikes + 1)
    }

    const deleteClick = () => {
        props.deleteCallBack(props.id)
    }

    return <section className="card">
        <p>{props.message}</p>
        <p>likes: {cardLikes}</p>
        <p onClick={likeClick} className="likeButton">💕</p>
        <p onClick={deleteClick} className="deleteButton">🗑</p>
    </section>
};