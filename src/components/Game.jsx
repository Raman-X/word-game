import React from "react";

import { WORDS } from "../data.js";

import GuessInput from "./GuessInput.jsx";
import GuessResults from "./GuessResults";

import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

import { checkGuess } from "../checkGuess.js";
import Keyboard from "./Keyboard";
function Game() {
  const [answer, setAnswer] = React.useState(
    () => WORDS[Math.floor(Math.random() * WORDS.length)],
  );
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = WORDS[Math.floor(Math.random() * WORDS.length)];
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
