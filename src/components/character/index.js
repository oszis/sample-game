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
		this.updateCharacter();
	}

	onShowDialogWindow = () => {
		console.log('show dialog window');

		this.setState({
			showDialogWindow: true,
		});
	};

	updateCharacter = () => {
		const { charId, gameService, name, style, currentRoom, dialog, routes } = this.props;
		this.setState({
			name,
			style,
			currentRoom,
			routes,
			dialog,
			dataLoaded: true,
		});
	};

	render() {
		return (
			<CharacterRender character={this.state} onShowDialogWindow={this.onShowDialogWindow}/>
		);
	}
}

export default withGameService(Character);
