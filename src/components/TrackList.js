import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import useMusicPlayer from '../hooks/useMusicPlayer';

const TrackList = () => {
  const { trackList,  playTrack, isThisTrackPlaying } = useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <div className="box" key={index}>
          <button className="button" onClick={() => playTrack(index)}>
            {isThisTrackPlaying(track.name) ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
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