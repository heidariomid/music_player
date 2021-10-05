import React from 'react';
import {useMyContext} from '../../Store/Context';

const Song = () => {
	const [state] = useMyContext();
	const {isPlaying} = state;
	const {name, cover, artist, color} = state.currentSong;

	return (
		<div className={`song-container ${isPlaying ? 'rotate-img' : ''} `}>
			<img src={cover} alt={name} style={{boxShadow: isPlaying ? `0px 0px 60px ${color[1]}` : ''}} />
			<h2 style={{color: color[1]}}>{name}</h2>
			<h3 style={{color: color[0]}}>{artist}</h3>
		</div>
	);
};

export default Song;
