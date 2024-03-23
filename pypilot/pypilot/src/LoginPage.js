// LoginPage.js

import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  const handleLogin = () => {
    // Your login logic here
    console.log('Login data:', { email, password });

    // After login, navigate to the home page
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>User Login</h1>

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
