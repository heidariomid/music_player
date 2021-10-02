import {faMusic} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = ({isPlayListActive, setIsPlayListActive}) => {
	return (
		<nav>
			<h1>Waves</h1>
			<button onClick={() => setIsPlayListActive(!isPlayListActive)}>
				<span style={{padding: '0.5rem'}}>PlayList</span>
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
