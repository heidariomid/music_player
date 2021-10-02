import React, {useRef, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
const Player = ({currentSong, setCurrentSong, lifting, songs, setSongs}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0, timeByPercent: 0});

	const timeHandler = (e) => {
		const {currentTime, duration} = e.target;
		const roundedCurrent = Math.round(currentTime);
		const roundedDuration = Math.round(duration);
		const timeByPercent = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({currentTime, duration, timeByPercent});
	};

	const timeFormatter = (time) => {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
	};

	const {audio, id, color} = currentSong;

	const audioRef = useRef(null);

	const dragHandler = (e) => {
		const {value} = e.target;
		audioRef.current.currentTime = value;
		setSongInfo({...songInfo, currentTime: value});
	};
	const playMusicHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	useEffect(() => {
		lifting({audioRef, isPlaying});
	}, [isPlaying, audioRef]);
	useEffect(() => {
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
	}, [currentSong]);
	const songDirection = async (direction) => {
		let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id);
		switch (direction) {
			case 'skip-back':
				if ((currentSongIndex - 1) % songs.length === -1) {
					await setCurrentSong(songs[songs.length - 1]);
					return isPlaying && audioRef.current.play();
				}
				await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
				break;
			case 'skip-forward':
				await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
				break;
			default:
				return isPlaying && audioRef.current.play();
		}
		return isPlaying && audioRef.current.play();
	};
	const songEndedHandler = async () => {
		let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
		return isPlaying && audioRef.current.play();
	};
	return (
		<div className='player'>
			<div className='time-control'>
				<p>{songInfo.currentTime ? timeFormatter(songInfo.currentTime) : '0:00'}</p>
				<div className='track' style={{background: `linear-gradient(to right, ${color[0]},${color[1]})`}}>
					<input type='range' min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
					<div className='animate-track' style={{transform: `translateX(${songInfo.timeByPercent}%)`}}></div>
				</div>
				<p>{songInfo.duration ? timeFormatter(songInfo.duration) : '0:00'}</p>
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
