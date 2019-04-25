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
		this.setState({
			showDialogWindow: true,
		});
	};

	onHideDialogWindow = () => {
		this.setState({
			showDialogWindow: false,
		});
	};

	updateCharacter = () => {
		const { name, style, currentRoom, dialog, routes } = this.props;

		this.setState({
			name,
			style,
			currentRoom,
			routes,
			dialog,
			hideDialog: false,
			dataLoaded: true,
		});
	};

	render() {
		return (
			<CharacterRender character={this.state} onHideDialogWindow={this.onHideDialogWindow} onShowDialogWindow={this.onShowDialogWindow}/>
		);
	}
}

export default withGameService(Character);
