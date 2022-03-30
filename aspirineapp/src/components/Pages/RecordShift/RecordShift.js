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
import { useState } from 'react';

const shiftURL = 'http://localhost:8080/api/shift';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Facundo', 'Lorenzo','15:30', '12/03/2022'),
  createData('carlos', 'Luciano','15:30', '12/03/2022'),
  createData('Nahuel', 'Santiago','15:30', '12/03/2022'),
  createData('Emiliano', 'Tomas','15:30', '12/03/2022'),
  createData('Agustin', 'Lorenzo','15:30', '12/03/2022'),
];

const RecordShift = () => {
  const [value, setValue] = React.useState(new Date());
  const [age, setAge] = React.useState('');
  const [shift, setShift] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  const getShift = async () => {
    await axios.get(shiftURL)
    .then(resp => {
      setShift(resp.data);
    }).catch(e => {
      console.log(e.response.data)
    })
  }

  getShift();

  return (
    <div>
      <div className='Calendar'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
           <DatePicker
            views={['day']}
            label="Just date"
            value={value}
           onChange={(newValue) => {
            setValue(newValue);
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
                <TableCell>Names</TableCell>
                <TableCell align="right">Doctor</TableCell>
                <TableCell align="right">Horario</TableCell>
                <TableCell align="right">Fecha</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {shift.map((element) => (
            <TableRow
              key={element.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{element.firstName}</TableCell>
              <TableCell align="right">{element.doctor}</TableCell>
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
        id="time"
        label="Elegir horario"
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
        <InputLabel id="demo-simple-select-standard-label">Médico</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        <div>
          <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2}> 
            <Button variant="contained">Generar turno</Button>
          </Stack>
        </div>
      </div>
    </div>
  )   
}

export default RecordShift