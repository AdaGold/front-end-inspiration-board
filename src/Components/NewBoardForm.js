import React from 'react';
import PropTypes from 'prop-types';
import "./NewBoardForm.css"

import { useState } from 'react';

const NewBoardForm = () => {

    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
    });

  
    const handleChange = (event) => {
      setFormFields({
        ...formFields,
        [event.target.id]: event.target.value,
      });
    };


    const onFormSubmit = (event) => {
      event.preventDefault();

      setFormFields({
        title:'',
        owner: ''
      })
    }

    return (
      <div id="newBoardForm">
        <h1> Add Board </h1>
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    id="title"
                    value={formFields.title}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input
                    name="owner"
                    id="owner"
                    value={formFields.owner}
                    onChange={handleChange} />
            </div>
            <input
                type="submit"
                value="Add Board" />
        </form>
      </div>
    );
};


export default NewBoardForm;
