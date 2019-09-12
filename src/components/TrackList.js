import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import useMusicPlayer from '../hooks/useMusicPlayer';

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

  const isPlayed = (name) => {
    return currentTrackName === name && isPlaying;
  }

  return (
    <>
      {trackList.map((track, index) => (
        <div className="box" key={index}>
          <button className="button" onClick={() => playTrack(index)}>
            {isPlayed(track.name) ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
          </button>
          <div className="song-title">
            {track.name}
          </div>
        </div>
      ))}
    </>
  )
}

export default TrackList;