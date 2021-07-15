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
         
                <form onSubmit={onFormSubmited} className='board'>
                    <div className="hearts">
                        <div style={{margin:'2em auto', padding:'2em'}}>
                            <label className="label">
                                Title:
                                <input type='text' id='title' value={formData.title} onChange={textInput} />
                            </label><br/>
                            <label >
                                Owner:
                                <input type='text' id='owner' value={formData.owner} onChange={textInput} />
                            </label>
                            <p className='preview'>Preview:<br/>{formData.title} - {formData.owner}</p>
                            <div className="card-script">
                                 <button className="submit-btn" type='submit'>Submit</button>
                            </div>
                        
                            </div>
                                        
                            <div className="heart">♡</div>
                            <div className="heart">♡</div>
                            <div className="heart">♡</div>
                            <div className="heart">♡</div>
                    </div>
                </form>      
        </div>
    )
}
export default NewBoard;