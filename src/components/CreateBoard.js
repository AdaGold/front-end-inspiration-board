import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateBoard = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    console.log("current value: ", event.target.value);
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onOwnerChange = (event) => {
    console.log("current value: ", event.target.value);
    setFormFields({ ...formFields, owner: event.target.value });
  };

  function emptyFields() {
    if (formFields.owner && formFields.title) {
      props.addBoard({
        title: formFields.title,
        owner: formFields.owner,
      });
    } else {
      alert("Fields can't be blank");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    emptyFields();
    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Board title: </label>
        <input
          name="Title"
          value={formFields.title}
          onChange={onTitleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="Owner">Owner of board: </label>
        <input
          name="Owner"
          value={formFields.owner}
          onChange={onOwnerChange}
        ></input>
      </div>

      <input type="submit" value="Add Board" />

      {/* 
      need to display cards based on Select menu board options
      --> requires GET request from back-end API
*/}
    </form>
  );
};

CreateBoard.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default CreateBoard;

