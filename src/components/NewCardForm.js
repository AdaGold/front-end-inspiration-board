import './form.css';
import { Container, Row, Col } from 'reactstrap';
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
        <section className="formContainer">

            <h3 className="formHeader">post a note!</h3>
            <form className="form" onSubmit={onFormSubmit}>
                <div>
                    {/* <label htmlFor="Message">message:</label> */}
                    <input className="cardMessageInput"
                    placeholder="write yr message"
                        name="message"
                        value={formFields}
                        onChange={onMessageChange} />
                </div>
                <input className="formButton post"
                    type="submit"
                    value="post note" />
            </form>

        </section>
    );
};

export default NewCardForm;