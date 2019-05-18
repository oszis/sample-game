const dialogEvents = (state = {}, action) => {
	switch (action.type) {
		case 'DIALOG-EVENTS_SET_LIST':
			return action.payload;
		case 'DIALOG-EVENTS_GET_LIST':
			return state;
		default:
			return state
	}
};

export default dialogEvents;
