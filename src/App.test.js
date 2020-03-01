import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';
import { MusicPlayerProvider } from './MusicPlayerContext';
import tracks from './tracks';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should display all the tracks name', () => {
	const { getByText } = render(
		<MusicPlayerProvider>
			<div className="container">
				<TrackList />
			</div>
		</MusicPlayerProvider>
	);

	for (const track of tracks) {
		getByText(track.name);
	}
});

it('should all the controls btns be disabled', () => {
	const { getByLabelText } = render(
		<MusicPlayerProvider>
			<div className="container">
				<PlayerControls />
			</div>
		</MusicPlayerProvider>
	);

	const contolsBtnsAriaLabel = ['Play the previous track', 'Play the track', 'Play the next track'];

	for (const label of contolsBtnsAriaLabel) {
		expect(getByLabelText(label)).toHaveAttribute('disabled');
	}
});
