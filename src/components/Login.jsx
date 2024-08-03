// src/components/Login.js
import React from 'react';
import { Button, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  return (
    <Container className="login-container">
      <Typography variant="h4" className="login-title">
        Select Your Role
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className="login-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Entrepreneur
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                className="login-button"
                onClick={() => onLogin('entrepreneur')}
              >
                Login as Entrepreneur
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="login-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Investor
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                className="login-button"
                onClick={() => onLogin('investor')}
              >
                Login as Investor
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
