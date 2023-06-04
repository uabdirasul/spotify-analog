import React, { useState } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState();

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      {console.log(setSongs, setCurrentSong)}
    </div>
  );
}

export default App;
