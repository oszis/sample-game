import React from 'react';

const DialogReplicRender = ({ replic, goToNextReplic }) => {
	return (
		<div className="dialog-window__container" onClick={goToNextReplic} key={replic.key}>
			<div className="dialog-window__overlay"/>
			<div className="dialog-window__author">{replic.author}</div>
			<div className="dialog-window__text">{replic.text}</div>
		</div>);
};

const DialogAnswerListRender = ({ answerList, onAnswerClick }) => {
	return (
		<div className="dialog-window__answer-list">
			{
				answerList.map((answer) => {
					return (
						<button
							className="dialog-window__answer"
							onClick={() => onAnswerClick(answer.index)}
							key={answer.key}>
							{answer.text}
						</button>
					);
				})
			}
		</div>
	);
};

export {
	DialogReplicRender,
	DialogAnswerListRender,
};
