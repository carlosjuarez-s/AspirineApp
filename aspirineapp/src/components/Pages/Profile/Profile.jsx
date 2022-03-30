import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';


const getPersonByIdUrl = 'http://localhost:8080/api/persons/';

const Profile = (props) =>{
    const id = props.data._id;


    console.log(props.data);


    return(
        
        <div>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            noValidate
            autoComplete="off"
            ></Box>
            <h1>Profile</h1>
            <TextField
            required
            id="filled-required"
            label="FirstName"
            defaultValue="Hello World"
            variant="filled"
            />
            <TextField
            required
            id="filled-required"
            label="LastName"
            defaultValue="Hello World"
            variant="filled"
            />
            <TextField
            required
            id="filled-required"
            label="UserName"
            defaultValue="Hello World"
            variant="filled"
            />
            <TextField
            required
            id="filled-required"
            label="Password"
            defaultValue="Hello World"
            variant="filled"
            />
            <TextField
            required
            id="filled-required"
            label="Email"
            defaultValue="Hello World"
            variant="filled"
            />
            <TextField
            required
            id="filled-required"
            label="Address"
            defaultValue="Hello World"
            variant="filled"
            />
        </div>
    )
}

export default Profile;