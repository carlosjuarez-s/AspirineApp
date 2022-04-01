import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
const loginUrl = "http://localhost:8080/api/persons/login";
const loginValidationUrl = "http://localhost:8080/api/persons/login/validate";

const Login = (props) =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState('');


    const handleOnSubmit = async(event) =>{
      event.preventDefault();
      await axios.post(loginUrl, {
        userName: userName,
        password, password
      })
      .then(response => {
        validationToken(response.data.token);
      })
      .catch(error => {
        setMsgError(error.response.data);
      })
    }

    const validationToken = async(token) => {
      await axios.get(loginValidationUrl, {
        headers: {
          token: token
        }
      })
      .then(response => {
        props.setToken(response.data);
      })
      .catch(error => {
        setMsgError(error.response.data);
      });
    }
    
    return (
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                  <Box component="form"  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleOnSubmit}
                    >
                      Sign In
                    </Button>
                    <Link to='/SignUp'>Sign Up</Link>
                    <div>
                      {msgError && (
                        <div className='error'>{msgError}</div>
                      )}
                    </div>
                  </Box>
                </Box>
                
              </Container>)
}
export default Login;