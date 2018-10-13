import React from 'react';

export const PlayerRow = ({
  id,
  Photo,
  Name,
  Nationality,
  Positions,
  Club,
  Overall,
  Value,
  Wage
}) => {
  return (
    <tr data-id={id}>
      <td>{Name}</td>
      <td>
        <img src={Photo} alt="alt_text"/>
      </td>
      <td>{Nationality}</td>
      <td>{Positions}</td>
      <td>{Club}</td>
      <td>{Overall}</td>
      <td>{Value}</td>
      <td>{Wage}</td>
    </tr>
  );
};
