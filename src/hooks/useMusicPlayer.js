import { useContext } from 'react';
import { MusicPlayerContext } from '../MusicPlayerContext';

const useMusicPlayer = () => {
	const [ state, setState ] = useContext(MusicPlayerContext);

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

	// Check if the given track name is the current track playing
	function isThisTrackPlaying(name) {
		return state.currentTrackName === name && state.isPlaying;
	}

	return {
		playTrack,
		togglePlay,
		currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
		trackList: state.tracks,
		isPlaying: state.isPlaying,
		playPreviousTrack,
		playNextTrack,
		isThisTrackPlaying
	};
};

export default useMusicPlayer;
