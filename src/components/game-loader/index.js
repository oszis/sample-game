import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import { withGameService } from '../hoc';
import { loadCharacters, loadRouteList, loadRooms } from '../../actions';

/*
* В этом компоненте будут загружаться все данные, нужные для начала новой игры.
* После загрузки все данные будут помещаться в store.
* */

class GameLoader extends Component {
	_isMounted = false;

	state = {
		loadPercent: 0,
		loadingText: null,
		hasError: false,
		characterList: [],
	};

	componentDidMount() {
		/*
			game loading
			todo: add helper for animation and API
		*/

		this._isMounted = true;

		const { gameService, gameLoaded } = this.props;

		/*get characters*/
		gameService.getCharacterList()
			.then((characterList) => {
				if (this._isMounted) {
					const list = this.errorCatcher(characterList);

					if (!list) {
						return false;
					}

					this.setState({
						characterList: list,
					});

					this.props.loadCharacters(list);

					return true;
				}
			})
			.then(() => {
				this.onChangePersent(35);
				this.onLoadingDone();
			});

		/*get routes*/
		gameService.getRoutes()
			.then((routesList) => {
				if (this._isMounted) {
					const list = this.errorCatcher(routesList);

					if (!list) {
						return false;
					}

					this.props.loadRoutes(list);

					return true;
				}
			})
			.then(() => {
				this.onChangePersent(35);
				this.onLoadingDone();
			});

		/*get rooms*/
		gameService.getRooms()
			.then(({ roomsList }) => {
				if (this._isMounted) {
					const list = this.errorCatcher(roomsList);

					if (!list) return false;
					this.props.loadRooms(list);

					return true;
				}
			})
			.then(() => {
				this.onChangePersent(30);
				this.onLoadingDone();
			})
	}

	componentWillUnmount() {
		this._isMounted = false;
	}


	errorCatcher = (data) => {
		/*console.log(data);*/

		if (typeof data === 'number') {
			this.setState({
				hasError: true,
			});

			return false;
		}

		return data;
	};

	onLoadingDone = () => {
		const { hasError, loadPercent } = this.state;

		this.onChangeLoadingText();

		if (hasError || loadPercent !== 100) return false;

		this.props.gameLoading(false);
		this.props.onLoadingDone();
	};

	onChangePersent = (percent) => {
		let currentPercent = this.state.loadPercent + percent;

		this.setState({
			loadPercent: currentPercent,
		});
	};

	onChangeLoadingText = () => {
		const { loadPercent } = this.state;

		const textArr = [
			{
				index: 0,
				name: 'локаций',
			},
			{
				index: 40,
				name: 'квестов',
			},
			{
				index: 75,
				name: 'персонажей',
			},
		];

		textArr.forEach(({ name, index }) => {
			if (loadPercent >= index) {
				this.setState({
					loadingText: name,
				});
			}
		});
	};

	render() {
		const { loadPercent, hasError, loadingText } = this.state;

		const loaderContent = hasError ? (
			<div className="game-loader__error">
				<div className="game-loader__error-text">Ошибка, данные не загрузились</div>
				<Link to="/" className="game-loader__link">Вернуться на главную страницу</Link>
			</div>) : (
			<div className="game-loader__loading">
				<div className="game-loader__loading-text">Загрузка {loadingText}</div>
				<div className="game-loader__line">
					<div
						className="game-loader__line-filler"
						style={{ width: `${loadPercent}%` }}
					/>
				</div>
			</div>
		);

		return (
			<div className="game-loader">
				{loaderContent}
			</div>
		);
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		gameLoading: (gameLoad) => {
			dispatch({
				type: 'GAME_LOADED',
				payload: gameLoad,
			});
		},
		loadCharacters: (characterList) => {
			dispatch(loadCharacters(characterList));
		},
		loadRoutes: (routesList) => {
			dispatch(loadRouteList(routesList));
		},
		loadRooms: (roomsList) => {
			dispatch(loadRooms(roomsList));
		},
	};
};

export default withGameService(connect(null, mapDispatchToProps)(GameLoader));
