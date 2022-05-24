import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { tictactoeCal } from "../../Helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = tictactoeCal(board);

  const onClick = (index) => {
    const boardCopy = [...board];
    if (winner || board[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(boardCopy);
  };

  const reset = () => {
    setXIsNext(true);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board board={board} onClick={onClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="reset-game" onClick={reset}>
        {" "}
        Reset
      </button>
    </div>
  );
};

export default Game;
