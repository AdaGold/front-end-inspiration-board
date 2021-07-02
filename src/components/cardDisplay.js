import { Container, Row, Col } from 'reactstrap';

import NewCardForm from "./NewCardForm";
import { useEffect, useState } from "react";
import { Card } from "./Card"
const axios = require('axios');


const CardDisplay = (props) => {

    const [cards, setCards] = useState([])

    const cardDelete = (cardId) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`,)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            });
        const newCards = [...cards]
        newCards.slice(cardId)
        setCards(newCards)
    };

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
            .then((response) => {

                setCards(response.data.cards)

            })
    }, [props.board.id])
    //want to watch "cards" so they can update in real-time but it seems like when we do it's making continious calls

    const cardsList = cards.map((card) => {
        return <div>
            <Card key={card.id} id={card.id} message={card.message} likescount={card.likes_count} deleteCallBack={cardDelete}></Card>
        </div>
    });

    return <div className="cardDisplayContainer">
        <h1 className="cardHeader">Cards for {props.board.title}</h1>
        <div className="cardDisplay">
            {cardsList}
        </div>
        <Col>
            <NewCardForm addCardCallback={props.addCardCallback}></NewCardForm>
        </Col>
    </div>
}

export default CardDisplay;