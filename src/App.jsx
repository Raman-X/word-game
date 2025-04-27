import React from "react";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
};

export default App;
