// src/components/InvestorView.jsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import PitchCard from './PitchCard';
import '../styles/InvestorView.css';

const pitches = [
  { id: 1, title: 'Startup 1', ranking: 8, feedback: 'Great potential in the market.' },
  { id: 2, title: 'Startup 2', ranking: 6, feedback: 'Needs a better business model.' },
  { id: 3, title: 'Startup 3', ranking: 9, feedback: 'Excellent traction and sales.' },
  { id: 4, title: 'Startup 4', ranking: 7, feedback: 'Good innovation, moderate market fit.' },
  { id: 5, title: 'Startup 5', ranking: 5, feedback: 'Weak finances, needs improvement.' },
  { id: 6, title: 'Startup 6', ranking: 8, feedback: 'Strong team, promising product.' },
];

const InvestorView = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom className="investor-title">
        Submitted Pitches
      </Typography>
      <Grid container spacing={3}>
        {pitches.map((pitch) => (
          <Grid item xs={12} sm={6} md={4} key={pitch.id}>
            <PitchCard pitch={pitch} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InvestorView;
