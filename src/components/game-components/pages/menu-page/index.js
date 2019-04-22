import React, {Component} from 'react';
import MainMenuRender from './render';
import './index.scss';
import { Link, withRouter } from 'react-router-dom';

class MenuPage extends Component {
	state = {
		hasSavedGames: false
	};

	onEscKeyPress = (e) => {
		if (e.key === 'Escape') {
			this.props.history.goBack();
		}
	};

	componentWillMount() {
		document.addEventListener('keydown', this.onEscKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscKeyPress);
	}

	render() {
		const continueGame = this.state.hasSavedGames ? (
			<React.Fragment>
				<Link className="page__button" to="/game/">Продолжить игру</Link>
				<Link className="page__button" to="/load-game">Загрузить игру</Link>
			</React.Fragment>
		) : null;

        return (
			<MainMenuRender continueGame={continueGame}/>
		);
    }
}

export default withRouter(MenuPage);
