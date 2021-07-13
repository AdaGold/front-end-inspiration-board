import React, { useState } from 'react'

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
            <form onSubmit={onFormSubmited}>
                <label>
                    Title:
                    <input type='text' id='title' value={formData.title} onChange={textInput} />
                </label>
                <label>
                    Owner:
                    <input type='text' id='owner' value={formData.owner} onChange={textInput} />
                </label>
                Preview: {formData.title} - {formData.owner}
                <input type='submit' />
            </form>

        </div>
    )
}
export default NewBoard;