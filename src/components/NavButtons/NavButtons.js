import React from 'react';

export const NavButtons = ({ startingPoint, changeOffset, offset }) => {
  return (
    <div className="next-prev-btns">
      {startingPoint !== 0 && (
        <button
          className="Previouse-page"
          onClick={() => changeOffset(offset - 20, 'dec')}
        >
          Previous Page
        </button>
      )}
      <button
        className="next-page"
        onClick={() => changeOffset(offset + 20, 'inc')}
      >
        Next Page
      </button>
    </div>
  );
};
