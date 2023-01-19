import React from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";
import { useState } from "react";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (formFields.message.length > 40) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      props.createCard(formFields.message);
    }

    setFormFields({
      message: "",
    });
  };

  return (
    <div className="newCardForm">
      <h1> Create New Card </h1>
      <form onSubmit={onFormSubmit}>
        <div className="bottomSpacing">
          <label htmlFor="message">Message: </label>
          <input
            name="message"
            id="message"
            value={formFields.message}
            onChange={handleChange}
          />
        </div>
        <div className="bottomSpacing">
          <label htmlFor="preview">Preview:</label>
          <div name="preview" className="preview">
            {formFields.message}
          </div>
        </div>
        {showError ? (
          <p>Error: Message cannot be longer than 40 characters.</p>
        ) : null}
        <input
          className="toggleFormButton pinkButton bottomSpacing"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

// NewCardForm.propTypes = {
//   board_id: PropTypes.number.isRequired,
// };

export default NewCardForm;
