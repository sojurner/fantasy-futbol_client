import React from 'react';
import { Polar } from 'react-chartjs-2';
import './PlayerStats.css';

export const PlayerStats = ({ stats, statType }) => {
  let hexCodes = [
    'rgb(206,192,155, 0.5)',
    'rgb(0,82,148, 0.5)',
    'rgb(114,114,113, 0.5)',
    'rgb(187,187,187, 0.5)'
  ];
  const playerStats = stats.map((stat, index) => {
    const backgroundColor = Object.keys(stat).map(
      (stat, indice) => hexCodes[indice % 3]
    );
    const data = {
      labels: Object.keys(stat),
      display: false,
      datasets: [
        {
          backgroundColor,
          borderColor: 'rgba(179,181,198,1)',
          pointHoverBackgroundColor: '#ffffa',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: Object.values(stat)
        }
      ]
    };
    return <Polar data={data} key={`${statType}-${index}`} height="215px" />;
  });
  return <div>{playerStats}</div>;
};
