import './Card.css';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
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



    const likeClick = () => {
        cardLike(props.id)
        setCardLikes(cardLikes + 1)
    }

    const deleteClick = () => {
        props.deleteCallBack(props.id)
    }

    return <section className="card">
        
        <div className="msgContainer">
        <p className="cardMessage">{props.message}</p>
        </div>

        <div className="bottom">
        <div className="cardDeets">
        <p className="cardLikes">likes: {cardLikes}</p>
        <p onClick={likeClick} className="likeButton">💕</p>
        <p onClick={deleteClick} className="deleteButton">🗑</p> 
        </div>
        </div>

    </section>
};