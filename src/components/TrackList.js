import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const TrackList = () => {
  const trackList = [{ name: 'track1' }, { name: 'track2' }, { name: 'track3' }];

  const playTrack = (index) => {
    console.log('playTrack', index);
  }

  const isPlayed = (name) => {
    console.log('isPlayed', name)
    return true;
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