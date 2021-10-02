import {v4 as uuidv4} from 'uuid';
import beaverSong from './assets/songs/Beaver Creek.mp3';
import Daylight from './assets/songs/Daylight.mp3';
import Aiguille from './assets/covers/Aiguille.jpg';
import CanaryForest from './assets/covers/CanaryForest.jpg';
const lofi = () => {
	return [
		{
			name: 'Beaver Creek',
			cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
			color: ['#2ab3bf', '#205950'],
			id: uuidv4(),
			active: true,
		},
		{
			name: 'Daylight',
			cover: 'https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/61226ba21704e25a2ece5728_tet0c8gdl30scqu.png',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
			color: ['#FF9D5E', '#D54948'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Passing Notes',
			cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
			color: ['#D56E43', '#1D3951'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Lonely Waves',
			cover: 'https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg',
			artist: 'C Y G N',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
			color: ['#D88ADA', '#292146'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Reflection',
			cover: 'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
			color: ['#c94043', '#CD607D'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Under the City Stars',
			cover: 'https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg',
			artist: 'Andrew, deli School, Avno',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
			color: ['#FFEDC4', '#3AA49A'],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
};

export default lofi;
