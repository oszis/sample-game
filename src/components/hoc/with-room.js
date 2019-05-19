import React, { Component } from 'react';

/*
* todo: фикс ссылок комнаты. Теперь ссылки находятся в отдельном json-файле.
*  Поиск ссылок нужно осуществлять перебором массива "links" и сравнением с объектом ссылок.
*  */

const withRoom = (Room, getRoomData) => {
	return class extends Component {
		state = {
			background: [],
			interactions: [],
			things: [],
			links: [],
			dialogEvents: []
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
							dialogEvents: data.dialogEvents
						});
					});

				this.createRoomLinks(this.state.links);
			}
		}

		createRoomLinks = (links) => {
			links.each((index, item) => {

			});
		};

		render() {
			return (<Room {...this.props} {...this.state}/>);
		}
	};
};




export default withRoom;
