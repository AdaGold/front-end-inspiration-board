import PropTypes from "prop-types";
import { useState } from "react";

const BoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: '',
  });

  const setTitle = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    });

  };
  const setOwner = (event) => {
      setFormFields({
        ...formFields,
        owner: event.target.value
      });    
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.createBoard({
      title: formFields.title,
      owner: formFields.owner
    })

    setFormFields({
      title: '',
      owner: ''
    })
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          name="title" 
          value={formFields.title} 
          onChange={setTitle} />
      </div>

      <div>
        <label htmlFor="owner">Owner</label>
        <input
          name="owner"
          value={formFields.owner}
          onChange={setOwner}
        ></input>
      </div>

      <button type="submit">Create Board</button>
    </form>
  );
};

BoardForm.propTypes = {
  createBoard: PropTypes.func.isRequired
};

export default BoardForm;
