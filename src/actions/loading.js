const gameLoaded = (gameIsLoaded) => {
	return {
		type: 'GAME_LOADED',
		payload: gameIsLoaded,
	};
};

export {
	gameLoaded,
};
