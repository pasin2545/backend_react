import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Navbar() {
    return (
    <>
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type={"text"} class="from-control" placeholder="Username" aria-lable="Username" aria-describedby="addon-wrapping"></input>
        </div>
    </>
    )
}

export default Navbar