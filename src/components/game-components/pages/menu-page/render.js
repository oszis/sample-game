import React from 'react';

import { Link } from 'react-router-dom';

const MainMenuRender = ({continueGame}) => {
	return (
		<div className="page">
			<div className="page__button-list">
				{continueGame}
				<Link className="page__button" to="/game/">Новая Игра</Link>
				<Link className="page__button" to="/settings">Настройки</Link>
				<Link className="page__button" to="/exit">Выйти из игры</Link>
			</div>
		</div>
	);
};

export default MainMenuRender;
