import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import "./newBoard.css"

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTION, PUT, PATCH"
};

const NewBoard = () => {
    const [ hidden, setHidden ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ owner, setOwner ] = useState('');
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Cors still errors out for some reason in browser?
        axios.post("http://localhost:5000/boards", {
            title: title,
            owner: owner
        }, {headers}).then(() => {
            setTitle('');
            setOwner('');
        }).catch((error) => {
            // TODO: Change this to actual error handling
            console.log(error);
        });
    }

    return (
        <section className="new-board-form">
            <div>
                <h4>New Board</h4>
                <form onSubmit={onFormSubmit}>
                    <p>Title</p>
                    <input 
                    type='text' 
                    name='title'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />

                    <p>Owner's Name</p>
                    <input 
                    type='text' 
                    name='owner'
                    value={owner} 
                    onChange={(e) => { setOwner(e.target.value) } } />

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