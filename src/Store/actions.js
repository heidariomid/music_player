import actionsType from './actionsType';

export const setSongs = (id) => {
	return {
		type: actionsType.SET_SONGS,
		payload: {song: {id}},
	};
};
export const setCurrentSong = (currentSong) => {
	return {
		type: actionsType.SET_CURRENT_SONG,
		payload: {currentSong},
	};
};
export const setSongInfo = (data) => {
	return {
		type: actionsType.SET_SONG_INFO,
		payload: {data},
	};
};
