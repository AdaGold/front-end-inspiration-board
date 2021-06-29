import { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: "", owner: ""
    });


    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    }

    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addBoardCallback({
            title: formFields.title,
            owner: formFields.owner
        });

        setFormFields({
            name: '',
            email: '',
        });
    };

    return (
        <section>
        <h1>Create New Board</h1>
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="Title">Title</label>
                <input
                    name="Title"
                    value={formFields.title}
                    onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="owner">Owner</label>
                <input name="owner"
                    value={formFields.owner}
                    onChange={onOwnerChange} />
            </div>
            <input
                type="submit"
                value="Add Board" />
        </form>
        </section>
    );
};

export default NewBoardForm;