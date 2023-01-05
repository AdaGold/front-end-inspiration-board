import React, {useState}  from 'react';
import PropTypes from 'prop-types';




const BoardForm = (props) => {


    console.log('render')
    const onTitleChange = (event) => {
        props.setFormFields({...props.state,title:event.target.value})

    };
    const onOwnerChange = (event) => {
        props.setFormFields({...props.state,owner:event.target.value})
    }
    console.log(onTitleChange)
    console.log(onOwnerChange)
    return (

    <form>
        <div>
            <label htmlFor='Title'>Board title </label>
            <input name='Title' value= {props.state.title} onChange={onTitleChange}></input>
            
        </div>
        <div>
            <label htmlFor='Owner'>Owner of board</label>
            <input name='Owner' value={props.state.owner} onChange={onOwnerChange}></input>
        </div>
    </form>
    

)};

BoardForm.propTypes = {
    state: PropTypes.array.isRequired,
    setFormFields : PropTypes.func.isRequired
};









export default BoardForm;