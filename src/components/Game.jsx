import React from "react";

import { WORDS } from "../data.js";

import GuessInput from "./GuessInput.jsx";
import GuessResults from "./GuessResults";

// Pick a random word on every pageload.
const answer = WORDS[Math.floor(Math.random() * WORDS.length)];

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
