import React from 'react';

export const PlayerTable = ({ currentPlayers }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <i className="fas fa-futbol" />
          </th>
          <th className="player-name">Player Name</th>
          <th>Nationality</th>
          <th>Positions</th>
          <th>Club</th>
          <th>Overall</th>
          <th>Value</th>
        </tr>
        {currentPlayers}
      </tbody>
    </table>
  );
};
