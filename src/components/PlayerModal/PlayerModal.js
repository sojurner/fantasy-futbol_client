import React from 'react';
import { BarChart } from 'react-easy-chart';

export const PlayerModal = ({ playerModal }) => {
  let data = [];
  const playerStats = playerModal.map(stats => {
    data = Object.keys(stats).map(key => {
      if (stats[key]) {
        return { x: key, y: stats[key] };
      }
    });
    return (
      <BarChart
        axisLabels={{ x: 'Stats', y: 'Score' }}
        axes
        yDomainRange={[0, 100]}
        grid
        colorBars
        axes
        data={data}
      />
    );
  });

  return <div>{playerStats}</div>;
};
