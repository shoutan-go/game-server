/**
 * @author lookis on 17/01/2018
 */
import React from 'react';

const render = (boardsize, cx, intersection) => {

  const intersections = [];
  for (let i = 0; i < boardsize; i += 1) {
    const row = [];
    for (let j = 0; j < boardsize; j += 1) {
      row.push(intersection(i, j));
    }
    intersections.push(
      <div
        key={i}
        className={cx({
          boardrow: true,
        })}
      >
        {row}
      </div>,
    );
  }
  return (
    <div
      className={cx({
        layer: true,
      })}
    >
      {intersections}
    </div>
  );
};

export default {
  render,
};
