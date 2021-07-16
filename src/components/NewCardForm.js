import { useState } from 'react';
import InspirationApi from '../api/inspirationApi';

const NewCardForm = ({setSelectedBoard}) => {
  const [cardMessage, setCardMessage] = useState('');

  const onNewCardSubmit = async (e) => {
    e.preventDefault();
    const newCreatedCard = await new InspirationApi().addCard(message);
    setCardMessage('');
  };

  const onMessageChange = (event) => {
    setCardMessage(event.target.value)
  };

  return (
    <form onSubmit={(e) => onNewCardSubmit(e)}>
      <label>
        New Card:
        <textarea maxLength="40" type="text" value={boardFormFields.title} onChange={onTitleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form> 
  )
}

export default NewCardForm;