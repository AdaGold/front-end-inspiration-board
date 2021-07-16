import { useState } from 'react';
import InspirationApi from '../api/inspirationApi';

const NewCardForm = ({ selectedBoardId, fetchCards }) => {
  const [cardMessage, setCardMessage] = useState('');

  const onNewCardSubmit = async (e) => {
    e.preventDefault();
    await new InspirationApi().addCard(selectedBoardId, cardMessage);

    setCardMessage('');

    setTimeout(() => {
      fetchCards();
    }, 1000);
  };

  const onMessageChange = (event) => {
    setCardMessage(event.target.value)
  };

  return (
    <form onSubmit={(e) => onNewCardSubmit(e)}>
      <label>
        New Card:
        <textarea maxLength="40" type="text" value={cardMessage} onChange={onMessageChange} />
      </label>
      <input type="submit" value="Submit" />
    </form> 
  )
}

export default NewCardForm;