const roomsLength = (newRooms) => {
	return {
		type: 'ROOMS_LENGTH',
		payload: newRooms
	}
};

const gameLoaded = (gameIsLoaded) => {
	return {
		type: 'GAME_LOADED',
		payload: gameIsLoaded
	}
};

export {
	roomsLength,
	gameLoaded
};
