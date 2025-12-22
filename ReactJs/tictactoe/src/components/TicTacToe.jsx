import React, { Fragment, useState } from "react";

const TicTacToe = () => {
  const [card, setCard] = useState(Array(9).fill(null));
  const [userX, setUserX] = useState(true);
  const [winner, setWinner] = useState("");

  const handleButtonClick = (index) => {
    if (winner) {
      alert(`${winner} is winner`);
      return;
    }
    if (card[index] !== null) {
      return;
    }
    const newCard = [...card];
    newCard[index] = userX ? "X" : "O";
    setCard(newCard);

    let res = checkWinner(newCard);
    if (res) {
      setWinner(res);
    }
    setUserX((prev) => !prev);
  };

  const checkWinner = (newCard) => {
    let combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combination?.length; i++) {
      const [a, b, c] = combination[i];

      if (newCard[a] === newCard[b] && newCard[b] === newCard[c]) {
        return newCard[a];
      }
    }
    return null;
  };
  const columnButtons = (index) => {
    return (
      <button
        className="border border-gray-500 w-20 h-20 text-2xl font-bold flex items-center justify-center cursor-pointer hover:bg-gray-200
    active:bg-gray-300
    transition"
        onClick={() => handleButtonClick(index)}
      >
        {card[index]}
      </button>
    );
  };

  const handleReset = () => {
    setCard(Array(9).fill(null));
      setWinner("");
      setUserX(true)
  };
  return (
    <div className="min-h-screen ">
      <h1 className="flex items-center justify-center text-2xl font-bold mt-5">
        Tic-Tac-Toe
      </h1>
      <div className="flex items-center justify-center mt-10 ">
        <div className="space-y-1">
          <div className="flex space-x-1">
            {columnButtons(0)}
            {columnButtons(1)}
            {columnButtons(2)}
          </div>
          <div className="flex space-x-1">
            {columnButtons(3)}
            {columnButtons(4)}
            {columnButtons(5)}
          </div>
          <div className="flex space-x-1">
            {columnButtons(6)}
            {columnButtons(7)}
            {columnButtons(8)}
          </div>
        </div>
      </div>
      {winner && (
        <h2 className="items-center justify-center flex ">
          winner is : {winner}
        </h2>
      )}
      <button
        onClick={handleReset}
        className="
    mx-auto mt-6
    border border-gray-500
    w-24 h-12
    text-lg font-bold
    flex items-center justify-center
    cursor-pointer
    hover:bg-gray-200
    active:bg-gray-300
    transition
  "
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
