const roomsList = (state = [], action) => {
	switch (action.type) {
		case 'ROOM_SET_LIST':
			return action.payload;
		case 'ROOM_GET_LIST':
			return state;
		default:
			return state;
	}
};

export default roomsList;
