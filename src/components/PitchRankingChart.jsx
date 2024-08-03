// src/components/PitchRankingChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/PitchRankingChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PitchRankingChart = ({ pitches }) => {
  const data = {
    labels: pitches.map(pitch => pitch.title),
    datasets: [
      {
        label: 'Ranking',
        data: pitches.map(pitch => pitch.ranking),
        backgroundColor: 'rgba(144, 202, 249, 0.6)',
        borderColor: 'rgba(144, 202, 249, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pitch Deck Rankings',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PitchRankingChart;
