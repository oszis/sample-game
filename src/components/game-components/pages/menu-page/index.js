import React, {Component} from 'react';
import MainMenuRender from './render';
import './index.scss';
import { Link } from 'react-router-dom';

class MenuPage extends Component {
	state = {
		hasSavedGames: false
	};

    render() {
		const continueGame = this.state.hasSavedGames ? (
			<React.Fragment>
				<Link className="page__button" to="/game/">Продолжить игру</Link>
				<Link className="page__button" to="/save-load">Загрузить игру</Link>
			</React.Fragment>
		) : null;

        return (
			<MainMenuRender continueGame={continueGame}/>
		);
    }
}

export default MenuPage;
