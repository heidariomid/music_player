import React from 'react';
import {useMyContext} from '../../Store/Context';
import List from './List';

const Lists = () => {
	const [state] = useMyContext();
	return (
		<div className={`playlist ${state.isPlayListActive ? 'playlist-active' : ''}`}>
			<h2 style={{fontFamily: 'Ephesis'}}>PlayList</h2>
			<div className='playlist-songs'>
				{state.songs.map((song) => (
					<List key={song.id} id={song.id} songs={state.songs} song={song} />
				))}
			</div>
		</div>
	);
};

export default Lists;
