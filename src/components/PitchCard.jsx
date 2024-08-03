// src/components/PitchCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/PitchCard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PitchCard = ({ pitch }) => {
  const data = {
    labels: ['Ranking'],
    datasets: [
      {
        label: pitch.title,
        data: [pitch.ranking, 10 - pitch.ranking],
        backgroundColor: ['rgba(144, 202, 249, 0.6)', 'rgba(255, 255, 255, 0.1)'],
        borderColor: ['rgba(144, 202, 249, 1)', 'rgba(255, 255, 255, 0.1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Ranking: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '80%',
  };

  return (
    <Card className="pitch-card">
      <CardContent>
        <Typography variant="h6" className="pitch-title">
          {pitch.title}
        </Typography>
        <Typography variant="body2" className="pitch-text">
          {pitch.feedback}
        </Typography>
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
        <Typography variant="h6" className="ranking-text">
          Ranking: {pitch.ranking}/10
        </Typography>
        <Button variant="contained" color="primary" className="view-details-button">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PitchCard;
