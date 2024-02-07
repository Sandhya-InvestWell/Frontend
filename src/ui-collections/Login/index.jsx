import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log(loginData);
    const res = await axios.post('http://localhost:8000/user/login', loginData);
    console.log(res);

    if (res && res.data.success) {
      setResult('Login successful');
      navigate('/home', { state: { props: res.data.result[0].name, result} });
    } else {
      console.log(res);
      setResult(res.data.message);
    }
  };


  return (
    <>
      <LoginForm email={email} password={password} result={result} loginUser={loginUser} setEmail={setEmail} setPassword={setPassword} />
    </>
  );
};

export default Main;
