import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import axios from 'axios';
import './NewUser.css';


const loginUrl = "http://localhost:8080/api/persons";

const NewUser = () =>{
  const [firstName, setFirstName] = useState('') 
  const [lastName, setLastName] = useState('') 
  const [email, setEmail] = useState('') 
  const [userName, setUserName] = useState('') 
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [msgError, setMsgError] = useState('')
  const [sucess, setSucess] = useState(false);

  const handleOnSubmit = async(event) =>{
    event.preventDefault();
    await axios.post(loginUrl,
      {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
          email: email,
          address: address,
          phone: phone
      })
      .then(response =>{
        console.log(response.data);
        setSucess(true);
      })
      .catch(error => {
        console.log(error.response.data);
        setMsgError(error.response.data);
      })    
  }

    return (
        <div>
          {sucess
            ? <div>Registrado</div>
            : 
            <Box 
            component="form"
  
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid #1c5d99',
              width: 600,
              height: 500,
              padding:8,
              borderRadius:1,
              boxShadow: 24,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              
            }}
            
          >
           <Typography  component="h1" variant="h4">
               Register
           </Typography>
            <div>
              <TextField 
                label="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value.toString())}
              />
              <TextField 
                label="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value.toString())}
              />
            </div>
            <div>
            <TextField fullWidth sx={{mt:2,mb:2}}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value.toString())}
            />
           <TextField fullWidth sx={{mt:2,mb:2}}
            label="Adress"
            value={address}
            onChange={e => setAddress(e.target.value.toString())}
            />
            </div>
            <div>
              <TextField  sx={{mt:2,mb:2}}
                label="UserName"
                value={userName}
                onChange={e => setUserName(e.target.value.toString())}
              />
                <TextField  sx={{mt:2,mb:2}}
                type="password"
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value.toString())}
              />
            </div>
  
            <div>
            <TextField 
                type="number"
                label="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div>
              {msgError && (
                <div className='error'>{msgError}</div>
              )}
            </div>
              <ButtonGroup variant="contained" fullWidth sx={{mt:2,mb:2}}>
                  <Button onClick={handleOnSubmit} color='success'>Save</Button>
              </ButtonGroup>
          </Box>
        }
        </div>
        );
          
        
    
}
export default NewUser;