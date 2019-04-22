import React from 'react';

const DialogWindowRender = ({ replicList, goToNextReplic }) => {
	return (
		<div className="dialog-window__replics">
			{
				replicList.map(({author, text, key}) => {
					return (
						<div className="dialog-window__container" onClick={goToNextReplic} key={key}>
							<div className="dialog-window__overlay"/>
							<div className="dialog-window__author">{author}</div>
							<div className="dialog-window__text">{text}</div>
						</div>);
				})
			}
		</div>
	);
};

const DialogAnswerListRender = ({ answerList, onAnswerClick }) => {
	return (
		<div className="dialog-window__answer-list">
			{
				answerList.map((answer) => {
					return (
						<button
							className="dialog-window__answer"
							onClick={() => onAnswerClick(answer.goto)}
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
	DialogWindowRender,
	DialogAnswerListRender,
};
