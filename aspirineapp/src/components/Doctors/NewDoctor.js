import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewDoctor =()=>{
   
    return (
        <Box 
          component="form"
          
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid #1c5d99',
            width: 600,
            height: 450,
            padding:8,
            borderRadius:1,
            boxShadow: 24,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
          }}
          
        >
         <Typography component="h1" variant="h4">
             New Doctor
         </Typography>
          <div>
            <TextField 
              label="First Name"
            />
            <TextField 
              label="Last Name"
            />
          </div>
          <div>
          <TextField fullWidth sx={{mt:2,mb:2}}
          label="Email"
          />
          <TextField fullWidth 
          label="Address"
          />
          </div>
          <div>
            <TextField  sx={{mt:2,mb:2}}
              type="number"
              label="Phone"
            />
              <TextField  sx={{mt:2,mb:2}}
              label="adressOffice"
              
            />
          </div>

          <div>
          <TextField fullWidth 
              label="Specialty"
            />
          
          </div>
            <ButtonGroup variant="contained" fullWidth sx={{mt:2,mb:2}}>
                <Button color='success'>Save</Button>
                <Button color='error'>Cancel</Button>
            </ButtonGroup>
        </Box>
      );
    
}
export default NewDoctor;