import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import "./newCard.css";

const NewCard = (props) =>{
    const [cardMessage, setCardMessage] = useState("");

    const handleMessageChange = (e) => { setCardMessage(e.target.value) };

    const submitNewCard = (e) => {
        e.preventDefault();
        props.createNewCard(cardMessage);
        setCardMessage('');
        

    }

    return (
        <section>
            <div className='new-card-form__form-text-area'>
                <h4>Create a New Card</h4>
                <form  onSubmit={(e) => {submitNewCard(e)}}>
                    <input 
                    class="cardInput"
                    type='text' 
                    name='text'
                    value={cardMessage} 
                    placeholder="add message here!"
                    onChange={handleMessageChange} />

                    <input 
                    className='new-card-form__form-button'
                    value={setCardMessage}
                    type='submit' />
                </form>
            </div>
        </section>

    );

};

NewCard.propTypes = {

    uniqueId: propTypes.number.isRequired,
    createNewCard: propTypes.func.isRequired,

};


export default NewCard;


// no props passed in
// state: holds information prior to submit
// form handling: sends state to API