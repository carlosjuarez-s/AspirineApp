import React, { useEffect } from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Home = () => {

  return (
    <div>
      <h1 className='titulo'>¡Bienvenidos al centro medico!</h1>
      <div className='imgContainer'>
        <img src='https://images.ecestaticos.com/npI-HsD81B7qyNQsEhrgl7iBats=/0x70:1716x1040/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg' alt=''/>
      </div>
      <div className='ToggleContainer'>
        <Link to='/recordshift'>
          <Button className='Button' variant="contained">
          Solicitar turno
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home