import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import GameLoader from '../../../game-loader';
import './index.scss';
import { connect } from 'react-redux';
import { gameLoaded } from '../../../../actions/loading';

class LoadingPage extends Component {

	state = {
		gameLoaded: false,
		gameLoading: false,
	};

	onLoadingDone = () => {
		this.props.gameLoaded(true);

		this.setState({
			gameLoaded: true,
			gameLoading: true,
		});
	};

	render() {
		const { gameLoading } = this.state;

		const redirectToGame = gameLoading ? (<Redirect to="/game/1"/>) : null;

		return (
			<div className="page">
				<GameLoader onLoadingDone={this.onLoadingDone}/>
				{redirectToGame}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gameLoaded: state.gameLoaded,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		gameLoaded: (gameIsLoaded) => {
			dispatch(gameLoaded(gameIsLoaded));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
