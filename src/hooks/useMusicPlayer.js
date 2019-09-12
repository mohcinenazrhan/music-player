import { useState } from 'react';
import happyrock from '../audios/happyrock.mp3';
import jazzyfrenchy from '../audios/jazzyfrenchy.mp3';
import summer from '../audios/summer.mp3';

const useMusicPlayer = () => {
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

	// Play a specific track
	function playTrack(index) {
		if (index === state.currentTrackIndex) {
			togglePlay();
		} else {
			state.audioPlayer.pause();
			state.audioPlayer = new Audio(state.tracks[index].file);
			state.audioPlayer.play();
			setState((state) => ({ ...state, currentTrackIndex: index, isPlaying: true }));
		}
	}

	// Toggle play or pause
	function togglePlay() {
		if (state.isPlaying) {
			state.audioPlayer.pause();
		} else {
			state.audioPlayer.play();
		}
		setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
	}

	// Play the previous track in the tracks array
	function playPreviousTrack() {
		const newIndex =
			((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
		playTrack(newIndex);
	}

	// Play the next track in the tracks array
	function playNextTrack() {
		const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
		playTrack(newIndex);
	}

	return {
		playTrack,
		togglePlay,
		currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
		trackList: state.tracks,
		isPlaying: state.isPlaying,
		playPreviousTrack,
		playNextTrack
	};
};

export default useMusicPlayer;
