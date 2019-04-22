import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import DialogWindow from '../../../dialog-window';
import GameLoader from '../../../game-loader';
import Inventory from '../../../inventory';

import './index.scss';
import { HomeRoom, CityRoom } from '../../rooms';

class GamePage extends Component {
	state = {
		currentRoom: this.props.match.params.id,
		loadGame: false,
	};

	componentWillMount() {
		this.props.gameLoading(true);
	}

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
				<Inventory />
				<DialogWindow/>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		loadGame: state.loadGame
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
				payload: gameLoad
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
