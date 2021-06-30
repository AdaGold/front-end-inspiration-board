import { React, useEffect, useState } from 'react';
import axios from 'axios';

const DeleteAllButton = () =>{
    // send request to delete route on button click. We could add a 'are you sure?' modal
    return(
        <button>Clear Board</button>
    )
}

export default DeleteAllButton;