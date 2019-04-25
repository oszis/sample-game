import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Inventory from '../../../inventory';

import Room from '../../../room';
import './index.scss';

class GamePage extends Component {
	state = {
		currentRoom: this.props.match.params.id,
		loadGame: false,
		gameLoaded: false,
		inventoryIsOpen: false,
		roomsList: null
	};

	componentDidMount() {
		this._isMounted = true;

		const { currentRoom, gameLoaded, loadGame, inventory, roomsList } = this.props;

		this.setState({
			loadGame,
			roomsList,
			currentRoom,
			gameLoaded,
			inventoryIsOpen: inventory.isOpen,
		});
	}

	componentWillReceiveProps(nextProps) {
		const { currentRoom } = this.state;

		if (currentRoom !== nextProps.match.params.id) {
			this.setState({
				currentRoom: Number(nextProps.match.params.id),
			});

			this.props.roomChanged(Number(nextProps.match.params.id));
		}
	}

	render() {
		const { gameLoaded } = this.props;
		const { currentRoom, roomsList} = this.state;

		if (!gameLoaded) {
			return (<Redirect to="/"/>);
		}

		const roomsArr = roomsList ? (roomsList.map((item, index) => {
			return (
				<Route
					path={`/game/${item.index.toString()}`}
					exact
					render={() =>
						(<Room {...item}/>)
					}
					key={index}/>
			);
		})) : null;

		return (
			<div className="game-page">
				<div className="game-page__rooms">
					<Switch>
						{roomsArr}
					</Switch>
				</div>
				<div className="game-page__popup">
					<h1>Страница игры.</h1>
					<p>Здесь будет находиться инвентарь персонажа, комнаты и диалоговое окно</p>
					<p>Текущая комната {currentRoom}</p>
				</div>
				<Inventory/>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		currentRoom: state.currentRoom,
		gameLoaded: state.gameLoaded,
		roomsList: state.roomsList,
		inventory: state.inventory
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		roomChanged: (roomIndex) => {
			dispatch({
				type: 'CHANGE_ROOM',
				payload: roomIndex,
			});
		},
		gameLoading: (gameLoad) => {
			dispatch({
				type: 'GAME_LOADED',
				payload: gameLoad,
			});
		},
	};
};

export {GamePage};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
