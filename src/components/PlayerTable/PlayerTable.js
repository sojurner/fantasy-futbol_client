import React from 'react';
import './PlayerTable.css';

export const PlayerTable = ({ currentPlayers }) => {
  return (
    <table>
      <tbody>
        <tr className="table-headers">
          <th>
            <i className="fas fa-futbol" />
          </th>
          <th className="player-name">Player Name</th>
          <th className="player-nationality">Nationality</th>
          <th className="player-position">Positions</th>
          <th className="player-club">Club</th>
          <th className="player-overall">Overall</th>
          <th className="player-value">Value</th>
        </tr>
        {currentPlayers}
      </tbody>
    </table>
  );
};
