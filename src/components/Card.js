import React from 'react'

const Card = ({ card, deleteCard, likeCard }) => {
    const onDeleteCard = () => {
        deleteCard(card.card_id)
    }

    const onLikeCard =()=>{
        likeCard(card.card_id)
    }
    return (
        <div>
            <p>{card.message}</p>
            <p onClick={onDeleteCard}>DELETE ME!</p>
            <p onClick={onLikeCard}> Like me: {card.likes_count} </p>
        </div>
    )
}

export default Card
