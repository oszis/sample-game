import React, { Component } from 'react';

import DialogWindow from '../../../dialog-window';
import withGameService from '../../../hoc/with-game-service';

class DialogEvent extends Component {
	state = {
		dialogList: [],
		currentDialog: 0,
	};

	componentDidMount() {
		const { dialogList } = this.props;

		this.setState({
			dialogList,
		});
	}

	render() {
		const { dialogList } = this.state;

		return (
			<div className="dialog-event">
				<DialogWindow {...dialogList}/>
			</div>
		);
	}
}

export default withGameService(DialogEvent);
