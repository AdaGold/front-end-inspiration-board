import PropTypes from "prop-types";
import { useState } from "react";

const CardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const setMessage = (event) => {
    setFormFields({
      message: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.createCard({
      message: formFields.message,
    });
    setFormFields({
      message: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit} id="card-form">
      <div id="card-input">
        <label htmlFor="message">Message</label>
        <input
          name="message"
          value={formFields.message}
          onChange={setMessage}
          className="card"
        />
      </div>
      <button type="submit">Create Card</button>
    </form>
  );
};

CardForm.propTypes = {
  createCard: PropTypes.func.isRequired,
};

export default CardForm;
