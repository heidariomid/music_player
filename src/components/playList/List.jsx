import React from 'react';

const List = ({songs, song, setCurrentSong, refPlay, setSongs}) => {
	const {id, name, cover, artist, active, color} = song;
	const {isPlaying, audioRef} = refPlay;

	const changeSongHandler = async () => {
		await setCurrentSong(song);
		const newSong = songs.map((song) => {
			if (song.id === id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSong);
		return isPlaying && audioRef.current.play();
	};
	return (
		<div style={{boxShadow: active ? `1px 1px 15px ${color[0]}` : ''}} className='playlist-song' onClick={changeSongHandler}>
			<img src={cover} alt={name} />
			<div className='song-desc'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	);
};

export default List;
