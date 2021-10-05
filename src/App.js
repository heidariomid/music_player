import React, {useState} from 'react';
import Nav from './components/nav/Nav';
import Player from './components/player/Player';
import PlayList from './components/playList/Lists';
import Song from './components/song/Song';
import {useMyContext} from './Store/Context';
import './styles/app.scss';
const App = () => {
	const [state] = useMyContext();
	return (
		<div className={`App ${state.isPlayListActive && 'active-playlist'}`}>
			<Nav />
			<Song />
			<Player />
			<PlayList />
		</div>
	);
};

export default App;
