// src/components/EntrepreneurView.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';
import SubmissionCard from './SubmissionCard';
import '../styles/EntrepreneurView.css';



const submissions = [
  { id: 1, title: 'Submission 1', feedback: 'Improve your business model to increase viability.' },
  { id: 2, title: 'Submission 2', feedback: 'Focus on market expansion.' },
  // Add more submissions here
];

const EntrepreneurView = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom className="entrepreneur-title">
        Your Submissions and Feedback
      </Typography>
      <Grid container spacing={3}>
        {submissions.map((submission) => (
          <Grid item xs={12} sm={6} md={4} key={submission.id}>
            <SubmissionCard submission={submission} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EntrepreneurView;
