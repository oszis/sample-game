import React, { Component } from 'react';

import './index.scss';

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
		const { name, style, characters } = this.props.state;
		const { isActive } = this.props;

		this.setState({
			name,
			style,
			characters,
			isActive,
			isLoaded: true,
		});
	}

	render() {
		if (!this.state.isLoaded) return false;

		const { name, style, characters } = this.state;

		return (
			<div className="room" style={style}>
				{name}
			</div>
		);
	}
}

export default Room;
