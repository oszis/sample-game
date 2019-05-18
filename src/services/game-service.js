import axios from 'axios';

export default class GameService {
	getData(url) {
		return axios.get(url);
	}

	catchError = (error) => {
		console.log(error.response.status);
		return error.response.status;
	};

	getRouteList() {
		return this.getData('data/game-routes.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}

	getSettings() {
		return this.getData('data/settings.json');
	}

	getRoomList() {
		return this.getData('data/room-list.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}

	getRoom(roomId) {
		return this.getRoomList()
			.then(({ data }) => {
				return data.currentRoom;
			})
			.catch((error) => this.catchError(error));
	};

	getDialog(dialogId) {
		return false;
	}

	getCharacterList = () => {
		return this.getData('data/characters.json')
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

	getDialogEventList() {
		return this.getData('data/dialog-event-list.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}

	getDialogEvent(eventId) {
		return this.getDialogEventList()
			.then((list) => {
				return list[eventId];
			})
			.catch((error) => this.catchError(error));
	}

	getLinkList() {
		return this.getData('data/links-list.json')
			.then(({ data }) => {
				return data;
			})
			.catch((error) => this.catchError(error));
	}
}
