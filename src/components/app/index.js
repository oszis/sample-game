import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import {
	MenuPage,
	SettingsPage,
	SaveLoadPage,
	GamePage,
	LoadingPage
} from '../game-components/pages';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" component={MenuPage} exact/>
					<Route path="/loading" component={LoadingPage} exact/>
					<Route path="/game/?id" component={GamePage}/>
					<Route path="/settings/" component={SettingsPage} exact/>
					<Route path="/save-game" component={SaveLoadPage} exact/>
					<Route path="/load-game" component={SaveLoadPage} exact/>
					<Route path="/new-game/" component={GamePage} exact/>
					<Route path="/game/:id?" render={({ match }) => {
						return (
							<GamePage match={match}/>
						);
					}}/>
				</Switch>
			</div>
		);
	}
}

export default App;
