import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';

class GameLoader extends Component {
	state = {
		loadPercent: 0,
	};

	componentDidMount() {
		/*
			game loading animation
			todo: add helper for animation and API
		*/
		setTimeout(() => {
			this.onChangePersent(10)
		}, 500);

		setTimeout(() => {
			this.onChangePersent(40)
		}, 1000);

		setTimeout(() => {
			this.onChangePersent(80)
		}, 3000);

		setTimeout(() => {
			this.onChangePersent(100);
		}, 5000);

		setTimeout(() => {
			this.props.gameLoading(false);
		}, 6500);
	}

	onChangePersent = (percent) => {
		this.setState({
			loadPercent: percent
		});
	};

	render() {
		const { loadPercent } = this.state;

		return (
			<div className="game-loader page">
				<div className="game-loader__line">
					<div
						className="game-loader__line-filler"
						style={{width: `${loadPercent}%`}}
					/>
				</div>
			</div>
		)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		gameLoading: (gameLoad) => {
			dispatch({
				type: 'GAME_LOADED',
				payload: gameLoad
			})
		}
	}
};

export default connect(null, mapDispatchToProps)(GameLoader);
