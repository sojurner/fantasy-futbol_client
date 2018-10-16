import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './PlayerModal.css';

export const PlayerModal = ({ playerModal }) => {
  const playerStats = playerModal.map((statType, index) => {
    const data = {
      labels: Object.keys(statType),
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,100,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: Object.values(statType)
        }
      ]
    };
    return (
      <HorizontalBar data={data} key={`${statType}-${index}`} height="215px" />
    );
  });
  return <div>{playerStats}</div>;
};
