import { useState } from 'react';
import InspirationApi from '../api/inspirationApi';

const NewBoardForm = ({setSelectedBoard}) => {
  const defaultFormState = { title: '', owner: '' };
  const [boardFormFields, setBoardFormFields] = useState(defaultFormState);

  const resetForm = () => {
    setBoardFormFields(defaultFormState)
  }

  const onNewBoardSubmit = async (e) => {
    e.preventDefault();
    const newBoard = {...boardFormFields}
    const newCreatedBoard = await new InspirationApi().addBoard(newBoard);
    setSelectedBoard(newCreatedBoard);
    resetForm();
  };

  const onTitleChange = (event) => {
    setBoardFormFields({
      ...boardFormFields,
      title: event.target.value
    })
  };

  const onOwnerChange = (event) => {
    setBoardFormFields({
      ...boardFormFields,
      owner: event.target.value
    })
  };

  return (
    <form onSubmit={(e) => onNewBoardSubmit(e)}>
      <label>
        New Board Title:
        <input type="text" value={boardFormFields.title} onChange={onTitleChange} />
      </label>
      <label>
        Board Owner:
        <input type="text" value={boardFormFields.owner} onChange={onOwnerChange} />
      </label>
      <input type="submit" value="Submit" />
    </form> 
  )
}

export default NewBoardForm;