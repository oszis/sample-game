import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import {
	MenuPage,
	SettingsPage,
	SaveLoadPage,
	GamePage,
} from '../game-components/pages';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" component={MenuPage} exact/>
					<Route path="/game/" component={GamePage} exact/>
					<Route path="/settings/" component={SettingsPage} exact/>
					<Route path="/save-load/" component={SaveLoadPage} exact/>
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
