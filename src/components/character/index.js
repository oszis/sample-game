import React, { Component } from 'react';
import { withGameService } from '../hoc';
import './index.scss';
import CharacterRender from './render';

/*
	todo: переписать стейт в стор,
    получать данные при загрузке игры, после парсить,
    иначе получается херня с данными у внутренних компонентов
*/

class Character extends Component {
	state = {
		name: null,
		style: {},
		currentRoom: 0,
		currentDialog: 0,
		routes: [],
		dialog: false,
		dataLoaded: false,
		showDialogWindow: false,
	};

	componentDidMount() {
		//this.updateCharacter();
	}

	showDialogWindow = () => {
		this.setState({
			showDialogWindow: true,
		});
	};

	/*updateCharacter = () => {
		const { charId, gameService } = this.props;

		return gameService.getCharacter(charId)
			.then((data) => {
				const { name, style, currentRoom, dialog, routes } = data;

				this.setState({
					name,
					style,
					currentRoom,
					routes,
					dialog,
					dataLoaded: true,
				});
			});
	};*/

	render() {
		return false; /*(
			<CharacterRender character={this.state} />
		);*/
	}
}

export default withGameService(Character);
