import { React, useEffect, useState } from 'react';
import axios from 'axios';
import "./deleteAllButton.css"

const DeleteAllButton = () =>{
    // send request to delete route on button click. We could add a 'are you sure?' modal
    return(
        <button>Delete All Content</button>
    )
}

export default DeleteAllButton;