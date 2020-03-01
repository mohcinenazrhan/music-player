import React, { useState } from 'react';
import tracks from './tracks';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		audioPlayer: new Audio(),
		tracks,
		currentTrackIndex: null,
		isPlaying: false
	});

	return <MusicPlayerContext.Provider value={[state, setState]}>{props.children}</MusicPlayerContext.Provider>;
};

export { MusicPlayerContext, MusicPlayerProvider };
