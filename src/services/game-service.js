import axios from 'axios';

export default class GameService {
	getData(url) {
		return axios.get(url);
	}

	getRoutes() {
		return this.getData('/data/game-routes.json');
	}

	getSettings() {
		return this.getData('/data/settings.json');
	}


	getRoom(roomId) {
		return this.getRoutes()
			.then(({ data }) => {
				return data.currentRoom;
			});
	};

	getDialog(dialogId) {
		return false;
	}

	getCharacter = (charId) => {
		return this.getData('/data/characters.json')
			.then(({ data }) => {
				return data[charId];
			})
			.catch((error) => {
				console.log(error);
			})
	};
}
