import React from "react";
import Cell from "./Cell";
import "./GameStyles.css";
const Board = (props) => {
  return (
    <div className="game-board">
      {props.board.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "X" : item === "O" ? "O" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
