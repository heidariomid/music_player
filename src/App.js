import React, {useState} from 'react';
import Nav from './components/nav/Nav';
import Player from './components/player/Player';
import PlayList from './components/playList/Lists';
import Song from './components/song/Song';
import './styles/app.scss';
import lofi from './utils';
const App = () => {
	const [songs, setSongs] = useState(lofi());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlayListActive, setIsPlayListActive] = useState(false);
	const [refPlay, setRefPlay] = useState({});
	const lifting = (data) => setRefPlay(data);

	return (
		<div className={`App ${isPlayListActive && 'active-playlist'}`}>
			<Nav isPlayListActive={isPlayListActive} setIsPlayListActive={setIsPlayListActive} />
			<Song currentSong={currentSong} refPlay={refPlay} />
			<Player currentSong={currentSong} setSongs={setSongs} setCurrentSong={setCurrentSong} lifting={lifting} songs={songs} />
			<PlayList songs={songs} setCurrentSong={setCurrentSong} refPlay={refPlay} setSongs={setSongs} isPlayListActive={isPlayListActive} />
		</div>
	);
};

export default App;
