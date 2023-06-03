import React from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
