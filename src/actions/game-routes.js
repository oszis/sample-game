const loadRouteList = (routeList) => {
	return {
		type: 'ROUTE_SET_LIST',
		payload: routeList,
	};
};

export {
	loadRouteList,
};
