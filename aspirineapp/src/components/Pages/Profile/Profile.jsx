import * as React from 'react';
import './Profile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Profile.css';

const url = 'http://localhost:8080/api/persons/';

const Profile = () =>{
    const [dataProfile, setDataProfile] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        address: "",
        phone: 0
    });

    const getData = async() => {
        const token = JSON.parse(sessionStorage.getItem("token"));
        await axios.get(url + token.token._id)
        .then(response => {
            setDataProfile({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                userName: response.data.userName,
                password: response.data.password,
                email: response.data.email,
                address: response.data.address,
                phone: response.data.phone
            });
        })
    }

    const updateData = async() => {
        const token = JSON.parse(sessionStorage.getItem("token"));
        await axios.put(url + token.token._id, {
            firstName: dataProfile.firstName,
            lastName: dataProfile.lastName,
            userName: dataProfile.userName,
            password: dataProfile.password,
            email: dataProfile.email,
            address: dataProfile.address,
            phone: dataProfile.phone
        })
        .then(response => {
            setDataProfile(response.data)
        })
    }
    
    const deleteData = async() => {
        const token = JSON.parse(sessionStorage.getItem("token"));
        axios.delete(url + token.token._id)

        sessionStorage.clear();
        window.location.reload(true);
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <div>
            <h1 className='title'>My Profile</h1>
            <form className='profileForm'>
                <div className='input'>
                    <label>FistName</label>
                    <input type="text" value={dataProfile.firstName} 
                    onChange={e => setDataProfile({firstName: e.target.value})}>
                    </input>
                </div>
                <div className='input'>
                    <label>LastName</label>
                    <input type="text" value={dataProfile.lastName} 
                    onChange={e => setDataProfile({ lastName: e.target.value })}>
                    </input>
                </div>
                <div className='input'>
                    <label>User</label>
                    <input type="text" value={dataProfile.userName} 
                    onChange={e => setDataProfile({ userName: e.target.value })}>
                    </input>
                </div>
                <div className='input'>
                    <label>Email</label>
                    <input type="email" value={dataProfile.email} 
                    onChange={e => setDataProfile({ email: e.target.value })}>
                    </input>
                </div>
                <div className='input'>
                    <label>Address</label>
                    <input type="text" value={dataProfile.address} 
                    onChange={e => setDataProfile({ address: e.target.value })}>
                    </input>
                </div>
                <div className='input'>
                    <label>Phone</label>
                    <input type="text" value={dataProfile.phone} 
                    onChange={e => setDataProfile({ phone: e.target.value })}>
                    </input>
                </div>
                <div className='buttonCenter' >
                <ButtonGroup variant="contained" sx={{ margin: 2, color: 'white'}}>
                <Button className="delete" color='error' onClick={deleteData}>Delete my profile</Button>
                <Button color='primary' onClick={updateData}>Save</Button>
                </ButtonGroup>
                </div>
            </form>
        </div>
    )
}

export default Profile;