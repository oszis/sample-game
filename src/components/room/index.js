import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import RoomLink from '../room-link';
import Character from '../character';
import DialogEvent from '../game-components/room-events/dialog-event';

class Room extends Component {
	state = {
		name: null,
		style: null,
		interactions: null,
		things: null,
		index: null,
		characters: null,
		links: null,
		isActive: false,
		isLoaded: false,
		roomLinks: {},
		userData: [],
		dialogEvents: null,
		roomDialogEvents: null,
		currentEventIndex: 0,
	};

	componentDidMount() {
		const { name, style, links, things, index, characters, isActive, userData, roomLinks, dialogEvents, roomDialogEvents } = this.props;

		this.setState({
			name,
			style,
			characters,
			isActive,
			things,
			links,
			index,
			userData,
			roomLinks,
			dialogEvents,
			roomDialogEvents,
			isLoaded: true,
		});
	}

	onRaiseCurrentEvent = () => {
		const { currentEventIndex, roomDialogEvents } = this.state;

		/*
		* todo: Пока что компонент работает только с dialogEvent. Нужно будет переписать его, чтобы он считывал длинну
		*  всех кастомных событий и пробегался по всем ним. + надо реализовать удаление события после 1 показа
		*  и показ некоторых событии только при определенной степени прохождения определенного рута. создаем саблинки
		*  на рут в {event.route}, проверяем рут, если все норм, воспроизводим.
		* */
		if (currentEventIndex < roomDialogEvents.length - 1) {
			return this.setState({
				currentEventIndex: currentEventIndex + 1,
			});
		} else {
			return this.setState({
				currentEventIndex: -1,
			});
		}
	};

	render() {
		if (!this.state.isLoaded) return false;

		const {
			name,
			style,
			characters,
			links,
			things,
			userData,
			roomDialogEvents,
			dialogEvents,
			currentEventIndex,
		} = this.state;

		/*room links*/
		const linksList = links ? links.map((link) => {
			const currentLink = this.state.roomLinks[link];

			return (
				<RoomLink {...currentLink} key={currentLink.key}/>
			);
		}) : null;

		/*room items & clickable elements*/
		const thingsList = things ? things.map((thing, index) => {
			return (
				<div key={index}>thing</div>
			);
		}) : null;

		/*room characters*/
		const charactersList = characters ? characters.map((character) => {
			const { index } = this.state;

			if (character.currentRoom === index) {
				return (
					<Character {...character} key={character.id}/>
				);
			} else return false;
		}) : null;

		/* room dialog events*/
		const roomDialogEventList = (currentEventIndex > -1 && roomDialogEvents.length) ?
			roomDialogEvents.map((dialogEvent, index) => {
				const { currentEventIndex } = this.state;

				if (currentEventIndex === index) {
					return (<DialogEvent {...dialogEvents[dialogEvent]}
										 onCloseDialogEvent={this.onRaiseCurrentEvent} key={index}/>);
				} else return null;
			}) : null;

		return (
			<div className={`room ${(userData.time > userData.nightTime) ? 'room--night' : ''}`}>
				<div className="room__content" style={style}>
					<div className="room__layer room__title">
						{name}
					</div>
					<div className="room__layer room__links">
						{linksList}
					</div>
					<div className="room__layer room__things">
						{thingsList}
					</div>
					<div className="room__layer room__characters">
						{charactersList}
					</div>
					<div className="room__layer room__dialog-events">
						{roomDialogEventList}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		characters: state.characters,
		userData: state.userData,
		roomLinks: state.roomLinks,
		dialogEvents: state.dialogEvents,
	};
};

export {
	Room,
};

export default connect(mapStateToProps, null)(Room);
