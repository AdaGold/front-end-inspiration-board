//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
const axios = require('axios');



// change to initiate brownout, test 2

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



    const likeClick = () => {
        cardLike(props.id)
        setCardLikes(cardLikes + 1)
    }

    const deleteClick = () => {
        props.deleteCallBack(props.id)
    }

    return <section className="card">
        <p className="cardMessage">{props.message}</p>
        <p className="cardLikes">likes: {cardLikes}</p>
        <p onClick={likeClick} className="likeButton">💕</p>
        <p onClick={deleteClick} className="deleteButton">🗑</p>
    </section>
};