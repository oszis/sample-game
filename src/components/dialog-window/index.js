import React, { Component } from 'react';
import './index.scss';
import { DialogWindowRender, DialogAnswerListRender } from './render';

class DialogWindow extends Component {
	state = {
		dialog: {},
		currentDialog: {},
		currentReplic: 0,
		dataLoaded: false,
	};

	componentDidMount() {
		this.getDialogObj(this.props);
	}

	getDialogObj = (dialogObj) => {
		const { dialog } = dialogObj;

		this.setState({
			dialog: dialog,
			currentDialog: dialog,
			dataLoaded: true,
		});
	};

	playReplics(replicList) {
		const { currentReplic } = this.state;
	}

	goToNextReplic = () => {
		console.log('go to next replic');
	};

	render() {
		if (!this.state.dataLoaded) return false;

		return (
			<div className="dialog-window">
				{/*<DialogWindowRender
					replicList={replics}
					goToNextReplic={this.goToNextReplic}/>*/}
			</div>
		);
	}
}

/*const mapStateToProps = (state) => {
	return {
		replicsArr: state.replicsArr,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dialogLoaded: (dialog) => {
			dispatch({
				type: 'LOAD_DIALOG',
				payload: dialog,
			});
		},
	};
};*/

/*export default withGameService(connect(mapStateToProps, mapDispatchToProps)(DialogWindow));*/

export default DialogWindow;
