import React, { useState } from 'react';
import happyrock from './audios/happyrock.mp3';
import jazzyfrenchy from './audios/jazzyfrenchy.mp3';
import summer from './audios/summer.mp3';

const MusicPlayerContext = React.createContext([ {}, () => {} ]);

const MusicPlayerProvider = (props) => {
	const [ state, setState ] = useState({
		audioPlayer: new Audio(),
		tracks: [
			{
				name: 'Happy Rock - Genesis',
				file: happyrock
			},
			{
				name: 'Jazzy Frenchy - Shaken Soda',
				file: jazzyfrenchy
			},
			{
				name: 'Summer - Such Fun',
				file: summer
			}
		],
		currentTrackIndex: null,
		isPlaying: false
	});

	return <MusicPlayerContext.Provider value={[ state, setState ]}>{props.children}</MusicPlayerContext.Provider>;
};

export { MusicPlayerContext, MusicPlayerProvider };
