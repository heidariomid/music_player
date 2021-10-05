import React, {useReducer} from 'react';
import {createContext, useContext} from 'react';
import {reducer, initState} from './reducer';

const Context = createContext();

export const useMyContext = () => {
	const context = useContext(Context);
	if (!context) {
		throw Error('state must be used by provider');
	} else {
		return context;
	}
};

export const ContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<>
			<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
		</>
	);
};
