import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './RecordShift.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';


const shiftURL = 'http://localhost:8080/api/shift';
const doctorURL = 'http://localhost:8080/api/doctor';

const RecordShift = () => {
  const [value, setValue] = useState(new Date());
  const [doctorName, setDoctorName] = useState('');
  const [shift, setShift] = useState([]);
  const [hour, setHour] = useState('');
  const [doctor, setDoctor] = useState([]);
  
  const getDoctor = async() =>{
    await axios.get(doctorURL)
    .then(response =>  {
      setDoctor(response.data)
    })
  }

  useEffect(() =>
  getDoctor()
  , [])


  const handleChange = (event) => {
    setDoctorName(event.target.value);
  }

  const getShift = async () => {
    await axios.get(shiftURL)
    .then(response => {
    setShift(response.data)
    })
  }
  
  useEffect(() => {
    getShift();
  }, [shift])

  const fullDate=(value)=>{
    let formatDate= value.getDate()+"/"+(value.getMonth()+1)+"/"+ value.getFullYear()
    return formatDate;
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("token"));
  
    await axios.post(shiftURL,{
      doctor: doctorName,
      hour: hour,
      date: fullDate(value),
      taken: false,
      })
  }

  return ( 
    <div>
      <div className='Calendar'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
           <DatePicker
            views={['day']}
            label="Date"
            value={value}
           onChange={(e) => {
            setValue(e);
          }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
          </Stack>
        </LocalizationProvider>
      </div>
      
      <div className='Table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Doctor</TableCell>
                <TableCell align="right">Hour</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {shift.map((element) => (
            <TableRow
              key={element.doctor}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{element.doctor}</TableCell>
              <TableCell align="right">{element.hour}</TableCell>
              <TableCell align="right">{element.date}</TableCell>
            </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className='newTurn'>
      <TextField
        value={hour}
        onChange={e => setHour(e.target.value)}
        id="time"
        label="Choose Schedule"
        type="time"
        defaultValue="12:00"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1800, // 5 min
        }}
        sx={{left: 22, width: 130 , mt:3 }}
      />
      <FormControl variant="standard" sx={{ m: 3, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-standard-label">Doctor</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={doctorName}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {doctor.map(doctorName => <MenuItem value={doctorName.firstName} onChange={e => setDoctorName(e.target.value)}>{doctorName.firstName}</MenuItem>)}
  
        </Select>
      </FormControl>
        <div>
          <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2}> 
            <Button variant="contained" onClick={handleOnSubmit}>Generate Shift</Button>
          </Stack>
        </div>
      </div>

    </div>
  )   
}

export default RecordShift