import axios from 'axios';

export default class GameService {
	getData(url) {
		return axios.get(url);
	}

	catchError = (error) => {
		return error.response.status;
	};

	getRoutes() {
		return this.getData('/data/game-routes.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}

	getSettings() {
		return this.getData('/data/settings.json');
	}

	getRooms() {
		return this.getData('/data/room-list.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}


	getRoom(roomId) {
		return this.getRooms()
			.then(({ data }) => {
				return data.currentRoom;
			})
			.catch((error) => this.catchError(error));
	};

	getDialog(dialogId) {
		return false;
	}

	getCharacterList = () => {
		return this.getData('/data/characters.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	};

	getCharacter = (charId) => {
		return this.getCharacterList()
			.then((list) => {
				return list[charId];
			})
			.catch((error) => this.catchError(error));
	};
}
