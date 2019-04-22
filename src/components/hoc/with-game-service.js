import React from 'react';

import {GameServiceConsumer} from '../game-service-context';

const withGameService = (Wrapped) => {
	return (props) => {
		return (
			<GameServiceConsumer>
				{
					(gameService) => {
						return (<Wrapped {...props} gameService={gameService}/>);
					}
				}
			</GameServiceConsumer>
		);
	}
};

export default withGameService;
