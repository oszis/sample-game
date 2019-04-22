import { combineReducers } from 'redux';

import currentDialog from './current-dialog';
import roomsList from './rooms-list';
import currentRoom from './current-room';
import inventory from './inventory';
import messages from './messages';
import gameRoutes from './game-routes';
import settings from './settings';
import userData from './user-data';
import loadGame from './game-load';

const getReducers = () => {
	return combineReducers({
		currentDialog,
		roomsList,
		currentRoom,
		inventory,
		messages,
		gameRoutes,
		settings,
		userData,
		loadGame
	});
};

export default getReducers;
