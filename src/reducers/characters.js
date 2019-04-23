const characters = (state = {}, action) => {
	switch (action.type) {
		case 'CHARACTER_GET':
			return action.payload;
		case 'CHARACTER_GET_LIST':
			return action.payload;
		case 'CHARACTERS_LOAD':
			return action.payload;
		default:
			return state;
	}
};

export default characters;
