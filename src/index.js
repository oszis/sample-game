import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import initialState from './reducers/initial-state';
import GameService from './services/game-service';
import { GameServiceProvider } from './components/game-service-context';
import initStore from './store';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import './styles/common.scss';

const store = initStore(initialState);
window.store = store;

const gameService = new GameService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<GameServiceProvider value={gameService}>
				<Router>
					<App/>
				</Router>
			</GameServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
