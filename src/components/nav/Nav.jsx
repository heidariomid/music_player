import {faMusic} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {setSongInfo} from '../../Store/actions';
import {useMyContext} from '../../Store/Context';

const Nav = () => {
	const [state, dispatch] = useMyContext();
	return (
		<nav>
			<h1>Waves</h1>
			<button onClick={() => dispatch(setSongInfo({isPlayListActive: !state.isPlayListActive}))}>
				<span style={{padding: '0.5rem'}}>PlayList</span>
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
