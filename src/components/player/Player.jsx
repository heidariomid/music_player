import React, {useRef, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {useMyContext} from '../../Store/Context';
import {setSongs, setCurrentSong, setSongInfo} from '../../Store/actions';
const Player = () => {
	const [state, dispatch] = useMyContext();
	const {songs, currentSong, isPlaying} = state;
	const [songAudio, setSongAudio] = useState({currentTime: 0, duration: 0, timeByPercent: 0});
	const timeHandler = (e) => {
		const {currentTime, duration} = e.target;
		const roundedCurrent = Math.round(currentTime);
		const roundedDuration = Math.round(duration);
		const timeByPercent = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongAudio({currentTime, duration, timeByPercent});
	};

	const timeFormatter = (time) => {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
	};

	const {audio, id, color} = currentSong;

	const audioRef = useRef(null);

	const dragHandler = (e) => {
		const {value} = e.target;
		audioRef.current.currentTime = value;
		setSongAudio({...songAudio, currentTime: value});
	};
	const playMusicHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			dispatch(setSongInfo({isPlaying: !isPlaying}));
		} else {
			audioRef.current.play();
			dispatch(setSongInfo({isPlaying: !isPlaying}));
		}
	};
	useEffect(() => {
		dispatch(setSongInfo({audioRef}));
	}, [audioRef]);
	useEffect(() => {
		dispatch(setSongs(id));
	}, [id]);

	const songDirection = async (direction) => {
		let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id);
		switch (direction) {
			case 'skip-back':
				if ((currentSongIndex - 1) % songs.length === -1) {
					await dispatch(setCurrentSong(songs[songs.length - 1]));
					return isPlaying && audioRef.current.play();
				}
				await dispatch(setCurrentSong(songs[(currentSongIndex - 1) % songs.length]));
				break;
			case 'skip-forward':
				await dispatch(setCurrentSong(songs[(currentSongIndex + 1) % songs.length]));
				break;
			default:
				return isPlaying && audioRef.current.play();
		}
		return isPlaying && audioRef.current.play();
	};
	const songEndedHandler = async () => {
		let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id);
		await dispatch(setCurrentSong(songs[(currentSongIndex + 1) % songs.length]));
		return isPlaying && audioRef.current.play();
	};
	return (
		<div className='player'>
			<div className='time-control'>
				<p>{songAudio.currentTime ? timeFormatter(songAudio.currentTime) : '0:00'}</p>
				<div className='track' style={{background: `linear-gradient(to right, ${color[0]},${color[1]})`}}>
					<input type='range' min={0} max={songAudio.duration || 0} value={songAudio.currentTime} onChange={dragHandler} />
					<div className='animate-track' style={{transform: `translateX(${songAudio.timeByPercent}%)`}}></div>
				</div>
				<p>{songAudio.duration ? timeFormatter(songAudio.duration) : '0:00'}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon onClick={() => songDirection('skip-back')} className='skip-back' icon={faAngleLeft} size='2x' color={color[0]} />
				<FontAwesomeIcon className='play' onClick={playMusicHandler} icon={isPlaying ? faPause : faPlay} size='2x' color={color[1]} />
				<FontAwesomeIcon onClick={() => songDirection('skip-forward')} className='skip-forward' icon={faAngleRight} size='2x' color={color[0]} />
			</div>
			<audio src={audio} ref={audioRef} onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} onEnded={songEndedHandler}></audio>
		</div>
	);
};

export default Player;
