import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

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
                <h2>New Card</h2>
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
                    onClick={(changeEvent) => {props.addNewCard(changeEvent, cardMessage)}}
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