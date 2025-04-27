import React from "react";

import Guess from "./Guess";
import range from "../range.js";

function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <Guess key={num} value={validatedGuesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
