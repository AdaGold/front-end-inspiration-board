import React, { useState } from 'react';

const NewCard = ({ createCard }) => {
    const [formData, setFormData] = useState({
        'message': '',
    })

    const [showForm, setShowForm] = useState(false)

    const textInput = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const onFormSubmited = (e) => {
        e.preventDefault()
        createCard(formData)
        setFormData({
            'message': ''
        })
    }

    const toggleShowForm = () => {
        setShowForm(!showForm)
        setFormData({ 'message': '' })
    }

    return (
        <div className="card">
            {showForm &&
                <form onSubmit={onFormSubmited}>
                    <label>
                        <b>Message:</b>
                    </label>
                    <textarea id='message' value={formData.message} onChange={textInput} />
                    <div className="card-footer card-script">
                        <button type='submit'>Submit</button>
                        <span onClick={toggleShowForm} className="pointer right">✖️</span>
                    </div>
                </form>
            }
            {!showForm &&
                <div onClick={toggleShowForm} className="add-card pointer">
                    ➕
                </div>
            }
        </div>
    )
}

export default NewCard;