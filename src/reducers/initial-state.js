let initialState = {
	currentDialog: {},
	roomsList: [],
	currentRoom: 1,
	inventory: {
		isOpen: false,
		items: [
			{
				id: 1,
				image: '#',
				name: 'Имя',
				description: 'Описание',
			},
		],
	},
	messages: [],
	gameRoutes: {},
	characters: {},
	settings: {
		"volume": 100
	},
	gameLoaded: false,
	roomLinks: {},
	userData: {
		time: 9,
		nightTime: 8,
		date: '1 января 2019',
	},
};

export default initialState;
