// RegistrationPage.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserRegistrationPage.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const showBackgroundImage = location.pathname === '/';

  const handleRegister = async () => {

    navigate('/login'); // Redirect to login page after registration

  };
  const handleRegistration = async () => {
    try {
      // Your existing form validation and data retrieval logic

      // Send a POST request to your backend
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log('User registered successfully');
        // Redirect or perform other actions as needed
      } else {
        console.error('Registration failed:', data.message);
        // Handle registration failure (show error message, etc.)
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle other errors
    }
    navigate('/login');
  };

  return (
    <div>

      <h1>Hey Learner let's get Started !!!!!!</h1>

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <button onClick={handleRegistration}>Register</button>
    </div >
  );
};

export default RegistrationPage;