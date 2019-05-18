import React, { Component } from 'react';
import './index.scss';
import { DialogReplicRender, DialogAnswerListRender } from './render';

class DialogWindow extends Component {
	state = {
		dialogList: {},
		currentDialog: {},
		replics: [],
		currentReplic: 0,
		showAnswers: false,
		answers: [],
		dataLoaded: false,
	};

	componentDidMount() {
		this.getDialogList(this.props);
	}

	getDialogList = (dialogList) => {
		this.setDialog(dialogList);
	};

	setDialog = (dialog) => {
		this.setState({
			currentDialog: dialog,
			replics: dialog.replics,
			currentReplic: 0,
			showAnswers: false,
			answers: [],
			dataLoaded: true,
		});
	};

	nextReplic = () => {
		const { replics, currentReplic } = this.state;

		if (currentReplic < replics.length - 1 && currentReplic !== -1) {
			return currentReplic + 1;
		}

		return -1;
	};

	onGoToNextReplic = () => {
		const nextReplic = this.nextReplic();
		const { currentDialog } = this.state;

		if (nextReplic === -1) {
			if (currentDialog.answers && currentDialog.answers.length) {
				this.showAnswers(currentDialog.answers);
			} else {
				this.onExitDialog();
			}
		}

		this.setState({
			currentReplic: nextReplic,
		});
	};

	showAnswers = (dialogAnswers) => {
		this.setState({
			showAnswers: true,
			answers: dialogAnswers,
		});
	};

	onAnswerClick = (answerIndex) => {
		const { answers } = this.state;

		if (answers && answers[answerIndex].exit) return this.onExitDialog();

		return this.setDialog(answers[answerIndex].dialog);
	};

	onExitDialog = () => {
		const { onHideDialogWindow } = this.props;

		onHideDialogWindow();
	};

	render() {

		const { dataLoaded, replics, currentReplic, answers, showAnswers } = this.state;

		if (!dataLoaded || !replics) return false;

		const replicItem = (currentReplic === -1) ? null :
			<DialogReplicRender replic={replics[currentReplic]} goToNextReplic={this.onGoToNextReplic}/>;

		const answersList = (showAnswers && answers.length) ?
			(<DialogAnswerListRender
				answerList={answers}
				onAnswerClick={this.onAnswerClick}/>)
			: null;

		return (
			<div className="dialog-window">
				{replicItem}
				{answersList}
			</div>
		);
	}
}

export default DialogWindow;
