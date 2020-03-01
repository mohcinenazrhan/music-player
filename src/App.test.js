import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import TrackList from './components/TrackList';
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