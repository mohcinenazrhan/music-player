import React from 'react';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';

function App() {
	return (
		<div className="container">
			<TrackList />
			<PlayerControls />
		</div>
	);
}

export default App;
