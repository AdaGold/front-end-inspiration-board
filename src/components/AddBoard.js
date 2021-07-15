import { useState } from 'react'

const AddBoard = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [owner, setOwner] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
        alert('Please add a board')
        return
        }

        onAdd({ title, owner })

        setTitle('')
        setOwner('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Board Name</label>
            <input
            type='text'
            placeholder='Add Board Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Owner</label>
            <input
            type='text'
            placeholder='Add Owner'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            />
        </div>

        <input type='submit' value='Save Board' />
        </form>
    )
    }

export default AddBoard