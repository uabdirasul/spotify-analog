import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" name="song-range" id="song-range" />
        <p>End time</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
