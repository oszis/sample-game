import React, { Component } from 'react';
import { withGameService } from '../hoc';
import CharacterAnimation from './character-animation';
import DialogWindow from '../dialog-window';
import './index.scss';

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

	showDialogWindow = () => {
		this.setState({
			showDialogWindow: true,
		});
	};

	updateCharacter = () => {
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
	};

	render() {
		const { dialog, style, showDialogWindow, dataLoaded } = this.state;

		if (!dataLoaded) return null;

		const dialogWindow = (showDialogWindow && dialog) ?
			<DialogWindow dialog={dialog}/> : null;

		const characterBlock = (
			<div
				className="character__image"
				style={style}
				onClick={this.showDialogWindow}>
				Прототип персонажа
				<CharacterAnimation/>
			</div>);

		return (
			<div className="character">
				{characterBlock}
				{dialogWindow}
			</div>
		);
	}
}

export default withGameService(Character);
