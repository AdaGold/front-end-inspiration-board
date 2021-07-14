import React, { useState } from 'react';
import '../App.css'

const NewBoard = ({ createBoard }) => {
    const [formData, setFormData] = useState({
        'title': '',
        'owner': '',
    })

    const onFormSubmited = (e) => {
        e.preventDefault()
        createBoard(formData)
        setFormData({
            'title': '',
            'owner': '',
        })
    }

    const textInput = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        setFormData((current) => ({ ...current, [field]: value }));
    };

    return (
        <div>
            <h1>Create A New Board</h1>
            <div className='board-form'>
                <form onSubmit={onFormSubmited}>
                    <label>
                        Title:
                        <input type='text' id='title' value={formData.title} onChange={textInput} />
                    </label>
                    <label>
                        Owner:
                        <input type='text' id='owner' value={formData.owner} onChange={textInput} />
                    </label>
                    <p className='preview'>Preview:<br/>{formData.title} - {formData.owner}</p><br/>
                    <input className='submit-btn' type='submit'/>
                </form>`
            </div>
        </div>
    )
}
export default NewBoard;