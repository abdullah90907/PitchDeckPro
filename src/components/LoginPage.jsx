// src/components/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate(`/${role}`);
  };

  return (
    <Container className="login-container">
      <Box className="login-box">
        <Typography variant="h4" className="login-title">
          Welcome to Startup Dashboard
        </Typography>
        <Typography variant="h6" className="login-subtitle">
          Please select your role
        </Typography>
        <Box className="button-group">
          <Button variant="contained" color="primary" onClick={() => handleLogin('entrepreneur')}>
            Login as Entrepreneur
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleLogin('investor')}>
            Login as Investor
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
