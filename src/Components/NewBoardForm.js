import React from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

import { useState } from "react";

const NewBoardForm = (props) => {
  // const onFormSubmit = (event) => {
  //   event.preventDefault();

  //   props.createTaskCallback({
  //     title: formFields.title,
  //     description: formFields.description,
  //     isComplete: false,
  //   });
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });
  const [showError, setShowError] = useState(false);
  const [hideForm, setHideForm] = useState(false);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!formFields.title || !formFields.owner) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    props.createBoard(formFields.title, formFields.owner);
    setFormFields({
      title: "",
      owner: "",
    });

    // add code to push to backend
    // reload board forms
  };

  return (
    <div className="newBoardForm">
      <h1> Create New Board </h1>
      <form onSubmit={onFormSubmit} className={hideForm ? "hiddenForm" : ""}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            id="title"
            value={formFields.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            name="owner"
            id="owner"
            value={formFields.owner}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preview">Preview:</label>
          <div name="preview" className="preview">
            {formFields.title}-{formFields.owner}
          </div>
        </div>
        {showError ? <p>Error: Owner and Title need to be filled out</p> : null}

        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => setHideForm(!hideForm)}>
        {hideForm ? "Show Form" : "Hide Form"}
      </button>
    </div>
  );
};

export default NewBoardForm;
