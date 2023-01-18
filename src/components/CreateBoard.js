import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateBoard = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  console.log("~~rendering CreateBoard.js main function component~~");

  const onTitleChange = (event) => {
    console.log("current value: ", event.target.value);
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onOwnerChange = (event) => {
    console.log("current value: ", event.target.value);
    setFormFields({ ...formFields, owner: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newFunction();
    setFormFields({
      title: "",
      owner: "",
    });

    function newFunction() {
      if (formFields.owner && formFields.title) {
        props.addBoard({
          title: formFields.title,
          owner: formFields.owner,
        });
      } else {
        alert("Fields can't be blank");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Board title </label>
        <input
          name="Title"
          value={formFields.title}
          onChange={onTitleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="Owner">Owner of board</label>
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

/*
OnTitleChange() and onOwnerChange() are not updating 
    live as you type on the form. (nothing logs to the console);
--> Everything re-renders with each new letter though.

Q: is '...FormFields' the problem?
*/
