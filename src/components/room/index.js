import React, { Component } from 'react';

import './index.scss';
import RoomLink from '../room-link';
import Character from '../character';

class Room extends Component {
	state = {
		name: null,
		style: null,
		interactions: null,
		things: null,
		characters: null,
		links: null,
		isActive: false,
		isLoaded: false,
	};

	componentDidMount() {
		const { name, style, characters, links, things } = this.props.state;
		const { isActive } = this.props;

		this.setState({
			name,
			style,
			characters,
			isActive,
			things,
			links,
			isLoaded: true,
		});
	}

	render() {
		if (!this.state.isLoaded) return false;

		const { name, style, characters, links, things } = this.state;

		/*room links*/
		const linksList = links ? links.map((link) => {
			return (
				<RoomLink {...link} key={link.key}/>
			);
		}) : null;

		/*room items & clickable elements*/
		const thingsList = things ? things.map((thing, index) => {
			return (
				<div key={index}>thing</div>
			);
		}) : null;

		const charactersList = characters ? characters.map((character) => {
			console.log(character);

			return (
				<Character {...character} key={character.id}/>
			);
		}) : null;

		return (
			<div className="room" style={style}>
				{name}
				{linksList}
				{thingsList}
				{charactersList}
			</div>
		);
	}
}



export default Room;
