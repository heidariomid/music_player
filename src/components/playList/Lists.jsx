import React from 'react';
import List from './List';

const Lists = ({songs, setCurrentSong, refPlay, setSongs, isPlayListActive}) => {
	return (
		<div className={`playlist ${isPlayListActive ? 'playlist-active' : ''}`}>
			<h2>PlayList</h2>
			<div className='playlist-songs'>
				{songs.map((song) => (
					<List key={song.id} id={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} refPlay={refPlay} setSongs={setSongs} />
				))}
			</div>
		</div>
	);
};

export default Lists;
