import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

const NewBoard = () =>{
    const [ hidden, setHidden ] = useState(false);
    const [ title, setTitle ] = useState('hello');
    const [ owner, setOwner ] = useState('hello');
    // state holds information based on form inputs
    // api call creates a new board on submit

    return (
        <section className="new-board-form">
            <div>
                <h4>New Board</h4>
                <form>
                    <input 
                    type='text' 
                    name='title'
                    value={title} 
                    placeholder="title"
                    onChange={ () => { setTitle() } } />

                    <input 
                    type='text' 
                    name='owner'
                    value={owner} 
                    placeholder="title"
                    onChange={ () => { setTitle() } } />

                    <input 
                    className='form-submit-button'
                    value='submit'
                    type='submit' />
                </form>
            </div>
        </section>

    );

}

export default NewBoard;