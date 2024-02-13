import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Toast from '../Toast/Toast';
import axios from 'axios';
import Navbar from '../../ui-collections/Navbar';

const Home = () => {
    const [email, setEmail] = useState();
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }, []);

    const func = async() => {
        const res = await axios.post('http://localhost:8000/user/logout', {withCredentials : true});
        console.log("<<<", res);
        if(res && res.data.success)
        {
            setEmail(res.data.decodedToken.email);
        }
        else{
            navigate('/')
        }
    }
    
    return (
        <>
            <Navbar/>
            <button className='logoutButton' onClick={func}>Get Data</button>
            <h2 className='result'>{email}</h2>
            
            <h1 className="home">Hello </h1>
            {showToast && <Toast message={"Login successful"}/>}
        </>
    );
};

export default Home;