import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import useMusicPlayer from '../hooks/useMusicPlayer';

const Controls = () => {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button aria-label="Play the previous track" className="button has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button aria-label={isPlaying ? 'Pause the track' : 'Play the track'} className="button has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button aria-label="Play the next track" className="button has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls;