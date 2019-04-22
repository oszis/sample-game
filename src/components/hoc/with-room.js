import React, { Component } from 'react';

const withRoom = (Room, getRoomData) => {
	return class extends Component {
		state = {
			background: [],
			interactions: [],
			things: [],
			links: [],
		};

		componentDidMount() {
			if (getRoomData) {
				getRoomData()
					.then((data) => {
						this.setState({
							background: data.background,
							interactions: data.interactions,
							things: data.things,
							links: data.links,
						});
					});
			}
		}

		render() {
			return (<Room {...this.props} {...this.state}/>);
		}
	};
};

export default withRoom;
