import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateCard = (props) => {
  const [formFields, setFormFields] = useState({
    boardId: "",
    text: "",
    likesCount: 0,
  });

  const onTextChange = (event) => {
    setFormFields({ ...formFields, text: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert();
    setFormFields({
      boardId: "",
      text: "",
      likesCount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Text">
          Card text:
          <br />
        </label>
        <textarea
          name="Text"
          value={formFields.text}
          onChange={onTextChange}
          rows={4}
          cols={22}
        />
      </div>
      <input type="submit" value="Add Card" />
    </form>
  );
};

CreateCard.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default CreateCard;
