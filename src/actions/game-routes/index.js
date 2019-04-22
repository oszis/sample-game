import gameService from '../../services/game-service';

const routeGetRoom = (roomId) => {
	return (dispatch) => {
		dispatch({
			type: 'ROUTE_GET_ROOM',
			payload: [],
		});
	}
};

const routeGetDialog = () => {
	return false;
};

const routeGetStep = () => {
	return false;
};

export {
	routeGetRoom,
	routeGetDialog,
	routeGetStep
};
