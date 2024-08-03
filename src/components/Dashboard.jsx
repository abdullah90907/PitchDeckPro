// src/components/Dashboard.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EntrepreneurView from './EntrepreneurView';
import InvestorView from './InvestorView';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    h4: {
      color: '#90caf9',
    },
  },
});

const Dashboard = () => {
  const [view, setView] = useState('entrepreneur');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Company Assessment Dashboard
          </Typography>
          <Button color="inherit" onClick={() => setView('entrepreneur')}>
            Entrepreneur
          </Button>
          <Button color="inherit" onClick={() => setView('investor')}>
            Investor
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        {view === 'entrepreneur' ? <EntrepreneurView /> : <InvestorView />}
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
