import NewCardForm from "./NewCardForm";
import { useEffect, useState } from "react";
import { Card } from "./Card"
const axios = require('axios');


const CardDisplay = (props) => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
            .then((response) => {

                setCards(response.data.cards)

            })
    }, [props.board.id])
    //want to watch "cards" so they can update in real-time but it seems like when we do it's making continious calls

    const cardsList = cards.map((card) => {
        return <div>
            <Card key={card.id} id={card.id} message={card.message} likescount={card.likes_count} likeCallBack={props.likeCallBack} deleteCallBack={props.deleteCallBack}></Card>
        </div>
    });

    return <div className="cardDisplayContainer">
        <h1 className="cardHeader">Cards for {props.board.title}</h1>
        <div className="cardDisplay">
        {cardsList}
        </div>
        <NewCardForm addCardCallback={props.addCardCallback}></NewCardForm>
    </div>
}

export default CardDisplay;