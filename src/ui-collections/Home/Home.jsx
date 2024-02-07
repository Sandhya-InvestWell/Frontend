import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Toast from '../Toast/Toast';

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const location = useLocation();
    const name = location.state.props;
    console.log(`My name ${name}`)

    useEffect(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }, []);


    return (
        <>
            <h1 className="home">Hello {name}</h1>
            {showToast && <Toast message={"Login successful"}/>}
        </>
    );
};

export default Home;