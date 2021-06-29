import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

const NewCard = () =>{
    const [cardMessage, setCardMessage] = useState('whatcha thinkin bout?');

    const newCardMessage = (changeEvent) => {
        console.log('new message')
        console.log('message value:', changeEvent.target.value);
        newCardMessage(changeEvent.target.value);
    }
    
    // no props passed in
    // state: holds information prior to submit
    // form handling: sends state to API

    return (
        <section>
            <h2>{cardMessage}</h2>
            <input type='text' value={cardMessage} onChange={newCardMessage} />
        </section>
    );

};

export default NewCard;