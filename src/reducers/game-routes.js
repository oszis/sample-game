const gameRoutes = (state = {}, action) => {
	switch (action.type) {
		case 'GET_ROUTE':
			return action.payload;
		default:
			return state;
	}
};

export default gameRoutes;
