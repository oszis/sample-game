const gameRoutes = (state = {}, action) => {
	switch (action.type) {
		case 'GET_ROUTE':
			return action.payload;
		case 'ROUTE_SET_LIST':
			return action.payload;
		case 'ROUTE_GET_LIST':
			return action.payload;
		default:
			return state;
	}
};

export default gameRoutes;
