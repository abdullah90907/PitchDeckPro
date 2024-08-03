// src/components/SubmissionCard.jsx
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import '../styles/SubmissionCard.css';

const SubmissionCard = ({ submission }) => {
  return (
    <Card className="submission-card">
      <CardContent>
        <Typography variant="h5" component="div" className="submission-title">
          {submission.title}
        </Typography>
        <Typography variant="body2" className="submission-text">
          Feedback: {submission.feedback}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default SubmissionCard;
