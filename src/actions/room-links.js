const loadLinksList = (linksList) => {
	return {
		type: 'ROOM-LINKS_SET_LIST',
		payload: linksList,
	};
};

const getLinksList = () => {
	return {
		type: 'ROOM-LINKS_GET_LIST',
	};
};

export {
	loadLinksList,
	getLinksList,
};
