//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React, {useState} from 'react';
const axios = require('axios');

export const Card = (props) => {

    const [cardLikes, setCardLikes] = useState(props.likescount)

    const cardLike = (cardId) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`,)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error)
        });
    };
    
    const cardDelete = (cardId) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`,)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
        console.log(error)
        });
        };

    const likeClick = () => {
        cardLike(props.id)
        setCardLikes(cardLikes + 1)
    }

    const deleteClick = () => {
        cardDelete(props.id)
    }

    return <section className="card">
        <p>{props.message}</p>
        <p>likes: {cardLikes}</p>
        <p onClick={likeClick} className="likeButton">💕</p>
        <p onClick={deleteClick} className="deleteButton">🗑</p>
    </section>
};