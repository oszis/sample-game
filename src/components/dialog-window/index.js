import React, { Component } from 'react';

import { connect } from 'react-redux';

import './index.scss';

import { withGameService } from '../hoc';
import { DialogWindowRender, DialogAnswerListRender } from './render';

class DialogWindow extends Component {
	state = {
		replicsArr: [],
		currentReplicIndex: 0,
	};

	componentDidMount() {
		const { gameService } = this.props;

		const data = gameService.getDialog();

		this.setState({
			replicsArr: data,
		});

		this.props.dialogLoaded(data);
	}

	onAnswer = (index) => {
		this.setState({
			currentReplicIndex: index,
		});
	};

	onGoToPrevReplic = () => {
		const { currentReplicIndex } = this.state;

		if (currentReplicIndex > 0) {
			this.setState({
				currentReplicIndex: currentReplicIndex - 1,
			});
		} else {
			this.setState({
				currentReplicIndex: 0,
			});
		}
	};

	onGoToNextReplic = () => {
		const { replicsArr, currentReplicIndex } = this.state;

		if (currentReplicIndex < replicsArr.length - 1) {
			this.setState({
				currentReplicIndex: currentReplicIndex + 1,
			});
		} else {
			this.setState({
				currentReplicIndex: -1,
			});
		}
	};

	onEndDialog = () => {
		/*todo: написать событие по завершению диалога*/
	};

	render() {
		const { currentReplicIndex, replicsArr } = this.state;

		if (replicsArr.length === 0 || currentReplicIndex === -1) {
			return false;
		}

		const { hasAnswer, answerList = [] } = replicsArr[currentReplicIndex];

		const answers = hasAnswer ? (
			<DialogAnswerListRender
				answerList={answerList}
				onAnswerClick={this.onAnswer}/>
		) : null;

		const dialogWindow = answers ? null :
			(<DialogWindowRender
				currentReplic={replicsArr[currentReplicIndex]}
				goToNextReplic={this.onGoToNextReplic}/>);

		return (
			<div className="dialog-window">
				{answers}
				{dialogWindow}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
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
};

export default withGameService(connect(mapStateToProps, mapDispatchToProps)(DialogWindow));
