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
    <form onSubmit={onFormSubmit} id="card-form" className="card">
      <div>
        <input
          name="message"
          value={formFields.message}
          onChange={setMessage}
          id='card-input'
        />
      </div>
        <button type="submit" id="create-card">Create Card</button>
    </form>
  );
};

CardForm.propTypes = {
  createCard: PropTypes.func.isRequired,
};

export default CardForm;
