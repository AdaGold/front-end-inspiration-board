import React,{useState}from 'react';

const NewCard = ({createCard})=>{
    const [formData, setFormData] = useState({
        'message': '',
    })
   
    const textInput = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        setFormData((current) => ({ ...current, [field]: value }));
    };


    const onFormSubmited = (e) => {
        e.preventDefault()
        createCard(formData)
        setFormData({
            'message': '',
        })
    }
    return (
        <div>
            <h1>New Card </h1>
            <form onSubmit={onFormSubmited}>
                <label>
                    Message:
                    <input type='text' id='message' value={formData.message} onChange={textInput} />
                </label>
                Preview: {formData.message}
                <input type='submit' />
            </form>

        </div>
    )
}

export default NewCard;