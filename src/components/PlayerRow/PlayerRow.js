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
        <img src={Photo} height="35" className="photo" alt="alt_text" />
      </td>

      <td>{Name}</td>

      <td>{Nationality}</td>
      <td>{Positions}</td>
      <td>{Club}</td>
      <td>{Overall}</td>
      <td>{Value}</td>
      {/* <td>{Wage}</td> */}
    </tr>
  );
};
