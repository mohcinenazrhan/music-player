import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

const Controls = () => {
  const isPlaying= true, currentTrackName= 'track1', togglePlay= () => {}, playPreviousTrack= () => {}, playNextTrack= () => {};
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button className="button has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button className="button has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button className="button has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls;