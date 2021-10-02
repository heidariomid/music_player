import React from 'react';

const Song = ({currentSong, refPlay}) => {
	const {name, cover, artist, color} = currentSong;
	const {isPlaying} = refPlay;

	return (
		<div className={`song-container ${isPlaying ? 'rotate-img' : ''} `}>
			<img src={cover} alt={name} style={{boxShadow: isPlaying ? `0px 0px 60px ${color[1]}` : ''}} />
			<h2 style={{color: color[1]}}>{name}</h2>
			<h3 style={{color: color[0]}}>{artist}</h3>
		</div>
	);
};

export default Song;
