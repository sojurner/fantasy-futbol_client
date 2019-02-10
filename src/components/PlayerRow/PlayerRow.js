import React from 'react';
import './PlayerRow.css';

export const PlayerRow = ({
  id,
  Photo,
  Name,
  Nationality,
  Positions,
  Club,
  Overall,
  Value,
  Wage,
  onOpenModal
}) => {
  return (
    <tr data-id={id} className={Name} onClick={onOpenModal.bind(null, id)}>
      <td>
        <img
          src={Photo}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              'https://www.referee.com/wp-content/uploads/2012/10/FIFA.png';
          }}
          height="35"
          className="photo"
          alt="alt_text"
        />
      </td>
      <td>{Name}</td>
      <td>{Nationality}</td>
      <td>{Positions}</td>
      <td>{Club}</td>
      <td>{Overall}</td>
      <td>{Value}</td>
    </tr>
  );
};
