import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './PlayerModal.css';

export const PlayerModal = ({ stats, statType }) => {
  let hexCodes = [
    'rgb(206,192,155, 0.5)',
    'rgb(0,82,148, 0.5)',
    'rgb(114,114,113, 0.5)',
    'rgb(187,187,187, 0.5)'
  ];
  const playerStats = stats.map((stat, index) => {
    const data = {
      labels: Object.keys(stat),
      datasets: [
        {
          label: statType[index],
          backgroundColor: `${hexCodes[index]}`,
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: Object.values(stat)
        }
      ]
    };
    return (
      <HorizontalBar data={data} key={`${statType}-${index}`} height="215px" />
    );
  });
  return <div>{playerStats}</div>;
};
