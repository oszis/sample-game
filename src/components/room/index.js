import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import RoomLink from '../room-link';
import Character from '../character';

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
	};

	componentDidMount() {
		const { name, style, links, things, index, characters, isActive } = this.props;

		this.setState({
			name,
			style,
			characters,
			isActive,
			things,
			links,
			index,
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
			const { index } = this.state;

			if (character.currentRoom === index) {
				return (
					<Character {...character} key={character.id}/>
				);
			} else return false;
		}) : null;

		return (
			<div className="room">
				<div className="room__content" style={style}>
					{name}
					{linksList}
					{thingsList}
					{charactersList}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		characters: state.characters
	}
};

export {
	Room
};

export default connect(mapStateToProps, null)(Room);
