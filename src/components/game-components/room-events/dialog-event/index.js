import React, { Component } from 'react';

import DialogWindow from '../../../dialog-window';
import withGameService from '../../../hoc/with-game-service';

class DialogEvent extends Component {
	state = {
		dialog: null,
		showDialog: false,
		onCloseDialogEvent: null,
	};

	componentDidMount() {
		const { dialog, onCloseDialogEvent } = this.props;

		this.setState({
			dialog,
			onCloseDialogEvent,
		});
	}

	onHideDialogWindow = () => {
		this.props.onCloseDialogEvent();
	};

	render() {
		const { dialog, onCloseDialogEvent } = this.state;

		const dialogWindow = (dialog && onCloseDialogEvent) ?
			<DialogWindow {...dialog} onHideDialogWindow={onCloseDialogEvent}/> : null;

		return (
			<div className="dialog-event">
				{dialogWindow}
			</div>
		);
	}
}

export default withGameService(DialogEvent);
