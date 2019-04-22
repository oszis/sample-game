const currentRoom = (state = 0, action) => {
	switch (action.type) {
		case 'CHANGE_ROOM':
			return action.payload;

		default:
			return state;
	}
};

export default currentRoom;
