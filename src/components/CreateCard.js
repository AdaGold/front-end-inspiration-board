import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateCard = (props) => {
  const [formFields, setFormFields] = useState({
    boardId: "",
    text: "",
    likesCount: 0,
  });

  const onTextChange = (event) => {
    console.log(formFields.text);
    console.log(formFields.text.length);
    setFormFields({ ...formFields, text: event.target.value });
    // if (formFields.text.length > 40) {
    //   alert("Message has exceeded 40 characters in length!");
  };

  const emptyAnd40 = () => {
    if (formFields.text.length > 40) {
      alert("Message cannot be over 40 characters");
    }
  };

  const handleSubmit = (event) => {
    if (formFields.text.length > 40) {
      event.preventDefault();
      alert("Message cannot be over 40 characters");
    } else {
      event.preventDefault();
      setFormFields({
        boardId: "",
        text: "",
        likesCount: 0,
      });
    }
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
