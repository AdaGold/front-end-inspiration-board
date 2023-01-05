import React, {useState}  from 'react';
import PropTypes from 'prop-types';




const BoardForm = (props) => {
    const [formFields, setFormFields] = useState({title: '',owner: ''})


    console.log('render')
    const onTitleChange = (event) => {
        setFormFields({...formFields,title: event.target.value})

    };
    const onOwnerChange = (event) => {
        setFormFields({...formFields,owner:event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBoardData({
            title: formFields.title,
            owner: formFields.owner
        });

        setFormFields({
            title: '',
            owner: '',
        });
    };
        console.log('submitted!')

    console.log(onTitleChange)
    console.log(onOwnerChange)
    return (

    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='Title'>Board title </label>
            <input name='Title' value= {formFields.title} onChange={onTitleChange}></input>
            
        </div>
        <div>
            <label htmlFor='Owner'>Owner of board</label>
            <input name='Owner' value={formFields.owner} onChange={onOwnerChange}></input>
        </div>
        <input
                type="submit"
                value="Add Board" />
       
    </form>
    

)};

BoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired
    
};









export default BoardForm;