const loadCharacters = (characterList) => {
	return {
		type: 'CHARACTERS_LOAD',
		payload: characterList,
	};
};

export {
	loadCharacters
};
