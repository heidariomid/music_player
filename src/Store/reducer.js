import {lofi} from '../songs';
import actionsType from './actionsType';

export const initState = {
	songs: lofi,
	currentSong: lofi[0],
	isPlayListActive: true,
	isPlaying: false,
	audioRef: null,
};
export const reducer = (state = initState, action) => {
	let result = null;
	switch (action?.type) {
		case actionsType.SET_SONGS:
			const {song} = action.payload;
			const newSongId = song.id;
			const newSongs = state.songs.map((song) => (song.id === newSongId ? {...song, active: true} : {...song, active: false}));
			result = {...state, songs: newSongs};
			break;
		case actionsType.SET_CURRENT_SONG:
			const {currentSong} = action.payload;
			result = {...state, currentSong};
			break;
		case actionsType.SET_SONG_INFO:
			const {data} = action.payload;
			console.log(data);
			result = {...state, ...data};
			break;
		default:
			result = state;
			break;
	}
	return result;
};
