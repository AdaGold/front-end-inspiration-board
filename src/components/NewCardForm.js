import { useState } from 'react';
import PropTypes from 'prop-types';
//for posting a card we'll have to include associated board id, I asuume this will be a state in the app.

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState('');


    const onMessageChange = (event) => {
        setFormFields(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback({ message: formFields });

        setFormFields('');
    };

    return (
        <section>
            <h1>post a note!</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="Message">message:</label>
                    <input
                        name="message"
                        value={formFields}
                        onChange={onMessageChange} />
                </div>
                <input
                    type="submit"
                    value="post note" />
            </form>
        </section>
    );
};

export default NewCardForm;