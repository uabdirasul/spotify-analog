import React, { useEffect } from "react";
import { playSong } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  timeUpdateHandler,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  function convertSecond(second) {
    return (
      Math.floor(second / 60) + ":" + ("0" + Math.floor(second % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...setSongInfo,
      currentTime: e.target.value,
    });
  }

  function skipTrackHandler(direction) {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if (currentIndex - 1 === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playSong(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[currentIndex - 1]);
    }
    playSong(isPlaying, audioRef);
  }

  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong, songs, setSongs]);

  return (
    <div className="player">
      <div className="time-control">
        <p>{convertSecond(songInfo.currentTime)}</p>
        <input
          type="range"
          name="song-range"
          id="song-range"
          min="0"
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{songInfo.duration ? convertSecond(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      ></audio>
    </div>
  );
};

export default Player;
