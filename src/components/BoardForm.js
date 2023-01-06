import React, { useState } from "react";
import PropTypes from "prop-types"


const BoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  console.log("~~rendering BoardForm.js main function component~~");

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
    // This function works now, the error was a syntax error in the way we were passing this down from App. 
    // On submit we now update state
    if (formFields.title !== '' || formFields.owner !== '') {
    props.addBoard({
      title: formFields.title,
      owner: formFields.owner,
    })
    } 
    else {
        alert("Fields can\'t be blank")
    };

    setFormFields({
      title: "",
      owner: "",
    });
  };
  // How is this being stored in our App's state empty list? 

  console.log("~~onTitleChange: ", onTitleChange);
  console.log("~~onOwnerChange: ", onOwnerChange);
  console.log("~~lifting up state:", handleSubmit);

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
    </form>
  );
};

BoardForm.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default BoardForm;

/*
OnTitleChange() and onOwnerChange() are not updating 
    live as you type on the form. (nothing logs to the console);
--> Everything re-renders with each new letter though.

Q: is '...FormFields' the problem?
*/
