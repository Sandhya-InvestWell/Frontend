import React, { useState } from 'react';
import icon from '../media/images/hamburger.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const funcPolicyData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/user/getPolicyDocs");
      console.log(res);
      navigate("/policy", {state : {props : res.data.result}})
      
    } catch (error) {
      console.error("Error fetching policy data:", error);
    }
  };

  return (
    <div className='navbar'>
      <img src={icon} alt='hamburgerIcon' className='hamburgerIcon' onClick={toggleNavbar} />
      <ul className={`navbarItems ${showNavbar ? 'show' : ''}`}>
        <li className='navbarLi'> <Link className='navbarLinks' to='/home'> Home </Link>{' '} </li>
        <li className='navbarLi'> <Link className='navbarLinks'>Profile Section</Link>{' '} </li>
        <li className='navbarLi navbarLinks' onClick={funcPolicyData}> Policy Docs </li>
        <li className='navbarLi'> <Link className='navbarLinks'>Attendance</Link>{' '}</li>
      </ul>
    </div>
  );
};

export default Navbar;
