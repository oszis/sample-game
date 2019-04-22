const currentDialog = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_DIALOG':
			return {
				currentDialog: action.payload,
			};

		default:
			return state;
	}
};

export default currentDialog;
