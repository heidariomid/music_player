import React from 'react';
import {setCurrentSong, setSongs} from '../../Store/actions';
import {useMyContext} from '../../Store/Context';

const List = ({song}) => {
	const {id, name, cover, artist, active, color} = song;
	const [state, dispatch] = useMyContext();
	const {isPlaying, audioRef} = state;
	const changeSongHandler = async () => {
		await dispatch(setCurrentSong(song));
		dispatch(setSongs(id));
		return isPlaying && audioRef.current.play();
	};
	return (
		<div style={{boxShadow: active ? `1px 1px 15px ${color[0]}` : ''}} className='playlist-song' onClick={changeSongHandler}>
			<img src={cover} alt={name} />
			<div className='song-desc'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
				<h4>{id}</h4>
			</div>
		</div>
	);
};

export default List;
