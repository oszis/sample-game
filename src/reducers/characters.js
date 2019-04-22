const characters = (state = {}, action) => {
	switch (action.type) {
		case 'CHARACTER_GET':
			return action.payload;
		default:
			return state;
	}
};

export default characters;
