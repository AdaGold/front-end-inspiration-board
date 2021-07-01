import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState('');


    const onMessageChange = (event) => {
        setFormFields(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback(formFields);

        setFormFields('');
    };

    return (
        <section className="newCardFormContainer">
            <h1 className="formHeader">post a note!</h1>
            <form className="newCardForm" onSubmit={onFormSubmit} className="form">
                <div>
                    <label htmlFor="Message">message:</label>
                    <input className="cardMessageInput"
                        name="message"
                        value={formFields}
                        onChange={onMessageChange} />
                </div>
                <input className="formButton"
                    type="submit"
                    value="post note" />
            </form>
        </section>
    );
};

export default NewCardForm;