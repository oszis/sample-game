const roomsList = (state = [], action) => {
	switch (action.type) {
		case 'ROOM_SET_LIST':
			return action.payload;
		case 'ROOM_GET_LIST':
			return state;
		case 'ROOM_REMOVE_DIALOG_EVENTS':
			return action.payload;
		default:
			return state;
	}
};

export default roomsList;
