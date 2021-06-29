import './NewCard.css'
import { useState } from 'react';

const NewCard = () => {
    const [upVoteButton, setUpVoteButton] = useState(0);
    const [newMessage, setNewMessage] = useState({
        message: ''
    });

    const putNewMessage = (event) => {
        setNewMessage({
            newMessage,
            message: event.target.value
        })
    };
//Make a new file to hold the info of all the cards, like student list in the example
    return (
        <form>
            <div>
                <label htmlFor="newCard">What's the message you want to say?</label>
                <input
                    name="newCard"
                    value={newMessage.message}
                    onChange={putNewMessage}/>
                <button onClick={() =>setUpVoteButton(upVoteButton + 1)}>I Agree!!!!</button>
            </div>
            <input
                type="submit"
                value="Add new message"/>
        </form>
    );
}

export default NewCard