import { combineReducers } from 'redux';

import currentDialog from './current-dialog';
import roomsList from './rooms-list';
import currentRoom from './current-room';
import inventory from './inventory';
import messages from './messages';
import gameRoutes from './game-routes';
import settings from './settings';
import userData from './user-data';
import gameLoaded from './game-loading';
import characters from './characters';
import roomLinks from './room-links';

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
		characters,
		roomLinks,
		gameLoaded
	});
};

export default getReducers;
