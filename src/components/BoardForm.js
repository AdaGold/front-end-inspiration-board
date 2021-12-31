import { useState } from 'react';
import './Forms.css'

const NewBoardForm = (props) => {

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');
    const handleTitleChange = (e) => { setTitle(e.target.value) };
    const handleOwnerChange = (e) => { setOwner(e.target.value) };
    
    const submitNewBoard = (e) => {
    e.preventDefault();
    props.createNewBoard({ title, owner });
    setTitle('');
    setOwner('');
    };
    
    
    return (<form  onSubmit={submitNewBoard} className='new-board-form__form'>
        <h2>➕ Create a New Board</h2>
        <input
            type="text"
            value={title}
            placeholder="Title"
            id="name"
            onChange={handleTitleChange}
            className={((title.length === 0) || (title.length > 40)) ? 'invalid-form-input' : ''}></input>
        <input
            type="text"
            value={owner}
            placeholder="Owner's Name"
            onChange={handleOwnerChange}
            className={((owner.length === 0) || (owner.length > 40)) ? 'invalid-form-input' : ''}></input>
        <p>Preview: {title} - {owner}</p>
        <input
            type="Submit"
            disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
            className='new-board-form__form-submit-btn'></input>
        </form>);
    }
    
    export default NewBoardForm;