const loadDialogEventList = (linksList) => {
	return {
		type: 'DIALOG-EVENTS_SET_LIST',
		payload: linksList,
	};
};

const getDialogEventList = () => {
	return {
		type: 'DIALOG-EVENTS_GET_LIST',
	};
};

export {
	loadDialogEventList,
	getDialogEventList,
};
