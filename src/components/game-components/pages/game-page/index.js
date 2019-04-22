import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import GameLoader from '../../../game-loader';
import Inventory from '../../../inventory';

import './index.scss';
import { HomeRoom, CityRoom } from '../../rooms';

class GamePage extends Component {
	state = {
		currentRoom: this.props.match.params.id,
		loadGame: false,
		inventoryIsOpen: false,
	};

	/*onEscKeyPress = (e) => {
		const { inventoryIsOpen } = this.state;
		const { history } = this.props;

		if (!inventoryIsOpen && e.key === 'Escape') {
			history.push('/save-game');
		}
	};*/

	componentWillMount() {
		const { loadGame, inventory } = this.props;

		this.setState({
			loadGame: loadGame,
			inventoryIsOpen: inventory.isOpen,
		});

		/*document.addEventListener('keydown', this.onEscKeyPress);*/
	}

	/*componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscKeyPress);
	}*/

	componentWillReceiveProps(nextProps) {
		const { currentRoom } = this.state;

		if (currentRoom !== nextProps.match.params.id) {
			this.setState({
				currentRoom: Number(nextProps.match.params.id),
			});

			this.props.roomChanged(Number(nextProps.match.params.id));
		}

		this.setState({
			loadGame: nextProps.loadGame,
			inventoryIsOpen: nextProps.inventory.isOpen
		});
	}

	render() {
		const { currentRoom, loadGame } = this.state;

		const loader = loadGame ? (<GameLoader/>) : null;

		return (
			<div className="game-page">
				<Switch>
					<Route path="/game/1" component={HomeRoom}/>
					<Route path="/game/2" component={CityRoom}/>
					<Route component={HomeRoom}/>
				</Switch>
				{loader}
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
		loadGame: state.loadGame,
		inventory: state.inventory,
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
