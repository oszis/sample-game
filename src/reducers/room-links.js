const roomLinks = (state = {}, action) => {
	switch (action.type) {
		case 'ROOM-LINKS_SET_LIST':
			return action.payload;
		case 'ROOM-LINKS_GET_LIST':
			return state;
		default:
			return state
	}
};

export default roomLinks;
