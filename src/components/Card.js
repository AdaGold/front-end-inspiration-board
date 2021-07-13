import React from 'react'

const Card = ({ card, deleteCard }) => {
    const onDeleteCard = () => {
        deleteCard(card.card_id)
    }
    return (
        <div>
            <p>{card.message}</p>
            <p onClick={onDeleteCard}>DELETE ME!</p>
        </div>
    )
}

export default Card
