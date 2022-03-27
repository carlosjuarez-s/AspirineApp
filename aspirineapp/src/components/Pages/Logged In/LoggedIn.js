import React from "react";
import Button from '@mui/material/Button';
import './LoggedIn.css'

const LoggedIn = (props) => {

    return(
        <div>
            <h1 className='titulo'>¡Bienvenidos props!</h1>
      <div className='imgContainer'>
        <img src='https://images.ecestaticos.com/npI-HsD81B7qyNQsEhrgl7iBats=/0x70:1716x1040/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg' alt=''/>
      </div>
      <div className='ToggleContainer'>
        <Button href="/RequestShift" className='Button' variant="contained" disableElevation>
          Solicitar turno
        </Button>
      </div>
        </div>
    )
}

export default LoggedIn