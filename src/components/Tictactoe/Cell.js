import React from "react";

const Cell = ({ value, onClick, className }) => {
  // eslint-disable-next-line no-template-curly-in-string
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
