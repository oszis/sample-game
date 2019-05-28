import React, { useState } from 'react';

const DialogReplicRender = ({ replicArr, activeIndex, goToNextReplic }) => {
	return replicArr.map((replic, index) => {
		console.log(replic.image);
		const authorImage = replic.image ? <div className="dialog-window__author-image">
				<img src={replic.image} alt="" style={replic.imageStyle}/>
			</div> : "";

		return (
			<div
				className={`dialog-window__replic ${activeIndex === index ? 'active' : ''}`}
				onClick={goToNextReplic}>
				<div className="dialog-window__overlay"/>
				{authorImage}
				<div className="dialog-window__replic-container">
					<div className="dialog-window__author">{replic.author}</div>
					<div className="dialog-window__text">{replic.text}</div>
				</div>
			</div>
		);
	});
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
