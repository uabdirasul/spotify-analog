import React from "react";
import { playSong } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  id,
  setSongs,
}) => {
  function selectSongHandler() {
    setCurrentSong(song);
    playSong(isPlaying, audioRef);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
