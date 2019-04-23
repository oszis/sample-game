const gameLoaded = (state = false, action) => {
	switch (action.type) {
		case 'GAME_LOADED':
			return action.payload;
		default:
			return state;
	}
};

export default gameLoaded;
