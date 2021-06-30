import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import "./newCard.css"

const exmapleToPost = {
    "board_id": 2,
    "card_id": 4,
    "likes_count": 0,
    "message": "hello"
}

const exmapleToPost = {
    "board_id": 2,
    "card_id": 4,
    "likes_count": 0,
    "message": "hello"
}

const NewCard = (props) =>{
    const [cardMessage, setCardMessage] = useState({
        id: 1,
        text: "",
    });

    const newCardMessage = (changeEvent) => {
        const newMessage = {...cardMessage, id: props.nextId, [changeEvent.target.name]: changeEvent.target.value};

        console.log(newMessage);
    
    }


    return (
        <section>
            <div className='new-card-form__form-text-area'>
                <h4>New Card</h4>
                <form>
                    <input 
                    type='text' 
                    name='text'
                    value={cardMessage.text} 
                    placeholder="add message here!"
                    onChange={newCardMessage} />

                    <input 
                    className='new-card-form__form-button'
                    value='add message'
                    onClick={(changeEvent) => {props.addNewCard(changeEvent, setCardMessage)}}
                    type='submit' />
                </form>
            </div>
        </section>

    );

};

NewCard.propTypes = {

    nextId: propTypes.number.isRequired,
    addNewCard: propTypes.func.isRequired,

};


export default NewCard;


// no props passed in
// state: holds information prior to submit
// form handling: sends state to API