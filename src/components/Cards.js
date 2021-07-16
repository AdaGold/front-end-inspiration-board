import React from 'react';
import '../App.css';
import Card from './Card'

const Cards = (props) => {
    return (
        <div className='cards'>
            {props.cards && props.cards.length > 0 &&
                props.cards.map(card => {
                    return (
                        <Card key={card.card_id} card={card}/>
                    )
            })
        }   
        </div>
    )
}

export default Cards;